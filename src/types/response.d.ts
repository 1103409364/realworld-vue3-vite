declare interface ResponseData<T> {
  code: number;
  message: string;
  data: T;
}
declare interface UserResponse {
  user: User;
}
declare interface Tag {
  id: string;
  tag: string;
}
declare interface TagsResponse {
  tags: Tag[];
}

declare interface ProfileResponse {
  profile: Profile;
}

declare interface ArticleResponse {
  article: Article;
}

declare interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

declare interface CommentResponse {
  comment: ArticleComment;
}

declare interface CommentsResponse {
  comments: ArticleComment[];
}
