<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                v-model="form.title"
                type="text"
                class="form-control form-control-lg"
                placeholder="Article Title"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="form.description"
                type="text"
                class="form-control form-control-lg"
                placeholder="What's this article about?"
              />
            </fieldset>
            <fieldset class="form-group">
              <textarea
                v-model="form.body"
                :rows="8"
                class="form-control"
                placeholder="Write your article (in markdown)"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="newTag.tag"
                type="text"
                class="form-control"
                placeholder="Enter tags"
                @change="addTag"
                @keypress.enter.prevent="addTag"
              />
              <div class="tag-list">
                <!-- TODO:调接口删除 -->
                <span
                  v-for="(tag, i) in form.tags"
                  :key="tag.id"
                  class="tag-default tag-pill"
                >
                  <i class="ion-close-round" @click="removeTag(i)" />
                  {{ tag.tag }}
                </span>
              </div>
            </fieldset>
            <button
              class="btn btn-lg pull-xs-right btn-primary"
              type="submit"
              :disabled="!(form.title && form.description && form.body)"
            >
              Publish Article
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArticle } from "src/services/article/getArticle";
import { postArticle, putArticle } from "src/services/article/postArticle";
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

interface FormState {
  title: string;
  description: string;
  body: string;
  tags: Tag[];
}

const route = useRoute();
const router = useRouter();
const slug = computed<string>(() => route.params.slug as string);

const form: FormState = reactive({
  title: "",
  description: "",
  body: "",
  tags: [],
});

const newTag = ref<Tag>({ tag: "" });
const addTag = () => {
  form.tags.push({ ...newTag.value });
  newTag.value.tag = "";
};
const removeTag = (i: number) => form.tags.splice(i, 1);
async function fetchArticle(slug: string) {
  const article = await getArticle(slug);
  Object.assign(form, article);
  // form.title = article.title;
  // form.description = article.description;
  // form.body = article.body;
  // form.tags = article.tags.map((t) => t.tag);
}

onMounted(() => {
  if (slug.value) fetchArticle(slug.value);
});

const onSubmit = async () => {
  let article: Article;
  if (slug.value) {
    article = await putArticle(slug.value, form);
  } else {
    article = await postArticle(form);
  }
  return router.push({ name: "article", params: { slug: article.slug } });
};
</script>
