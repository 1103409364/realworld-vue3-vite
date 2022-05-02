import { getAllTags } from "src/services/tag/getTags";
import { Tag } from "src/types/response";
import { ref } from "vue";

export function useTags() {
  const tags = ref<Tag[]>([]);

  async function fetchTags() {
    tags.value = [];
    tags.value = await getAllTags();
  }

  return {
    fetchTags,
    tags,
  };
}
