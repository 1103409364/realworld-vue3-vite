<template>
  <div class="article-preview">
    <div class="article-meta">
      <AppLink
        class="avatar"
        name="profile"
        :params="{ username: article.author.username }"
      >
        <img v-if="article.author.image" :src="article.author.image" />
        <i v-else class="ion-person"></i>
      </AppLink>
      <div class="info">
        <AppLink
          name="profile"
          :params="{ username: article.author.username }"
          class="author"
        >
          {{ article.author.username }}
        </AppLink>
        <span class="date">
          {{ new Date(article.created).toDateString() }}
        </span>
      </div>

      <button
        :aria-label="
          article.favorite ? 'Unfavorite article' : 'Favorite article'
        "
        class="btn btn-sm pull-xs-right"
        :class="[article.favorite ? 'btn-primary' : 'btn-outline-primary']"
        :disabled="favoriteProcessGoing"
        @click="() => favoriteArticle()"
      >
        <i class="ion-heart" />
        {{ article.favoritesCount }}
      </button>
    </div>

    <AppLink
      name="article"
      :params="{ slug: article.slug }"
      class="preview-link"
    >
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li
          v-for="tag in article.tagList"
          :key="tag"
          class="tag-default tag-pill tag-outline"
        >
          {{ tag }}
        </li>
      </ul>
    </AppLink>
  </div>
</template>

<script setup lang="ts">
import { useFavoriteArticle } from "src/composable/useFavoriteArticle";
import { computed } from "vue";

interface Props {
  article: Article;
}
interface Emits {
  (e: "update", article: Article): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { favoriteProcessGoing, favoriteArticle } = useFavoriteArticle({
  isFavorite: computed(() => props.article.favorite),
  articleSlug: computed(() => props.article.slug),
  onUpdate: (newArticle: Article): void => emit("update", newArticle),
});
</script>

<style scoped>
.avatar {
  display: inline-block;
  width: 32px;
  height: 32px;
  font-size: 1.5rem;
  line-height: 32px;
  text-align: center;
  background: #f3f3f3;
  border-radius: 50%;
}
</style>
