import { routerPush } from "src/router";
import { api, isFetchError } from "src/services";
import type { LoginUser } from "src/services/api";
import { useUserStore } from "src/store/user";
import { reactive, ref } from "vue";

export function useLogin() {
  const formRef = ref<HTMLFormElement | null>(null);
  const form: LoginUser = reactive({
    email: "",
    password: "",
  });

  const { updateUser } = useUserStore();

  const errors = ref();

  const login = async () => {
    errors.value = {};

    if (!formRef.value?.checkValidity()) return;

    try {
      const result = await api.users.login({ user: form });
      updateUser(result.data.user);
      await routerPush("global-feed");
    } catch (e) {
      if (isFetchError(e)) {
        errors.value = e.error?.errors;
        return;
      }
      console.error(e);
    }
  };
  return { formRef, form, errors, login };
}
