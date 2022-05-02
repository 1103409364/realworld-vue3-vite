declare interface Article {
  title: string;
  slug: string;
  body: string;
  created: string;
  updatedAt: string;
  tags: string[];
  description: string;
  author: Profile;
  favorite: boolean;
  favoritesCount: number;
}
