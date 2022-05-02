declare interface Article {
  title: string;
  slug: string;
  body: string;
  created: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Profile;
  favorite: boolean;
  favoritesCount: number;
}
