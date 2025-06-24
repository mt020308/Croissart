import { Comment } from "../comment/comment.module";

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: Date;
  author: string;
  image?: string;
  featured: boolean;
  tags: string[];
  gameId?: string;
  comments: Comment[];
}