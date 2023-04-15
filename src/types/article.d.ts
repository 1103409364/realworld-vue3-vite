declare interface Article {
  id?: number;
  title: string;
  slug: string;
  body: string;
  created: string;
  updatedAt: string;
  tags: Tag[];
  description: string;
  author: Profile;
  favorite: boolean;
  favoritesCount: number;
}

interface Tag {
  id: number;
  name: string;
}
