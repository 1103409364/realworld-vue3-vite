import { api } from "src/services";
import type { Tag } from "src/services/api";
import { ref } from "vue";

export function useTags() {
  const tags = ref<Tag[]>([]);

  async function fetchTags(): Promise<void> {
    tags.value = [];
    tags.value = await api.tags.getTags().then(({ data }) => data);
  }

  return {
    fetchTags,
    tags,
  };
}
