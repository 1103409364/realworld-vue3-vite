import { getAllTags } from "src/services/tag/getTags";
import { ref } from "vue";

export function useTags() {
  const tags = ref<TagsResponse | unknown[]>([]);

  async function fetchTags() {
    tags.value = await getAllTags();
  }

  return {
    fetchTags,
    tags,
  };
}
