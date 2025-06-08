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
}