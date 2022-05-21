declare interface UserResponse {
  user: User;
}
declare interface Tag {
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
