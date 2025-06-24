export interface Comment {
  id: string;           
  author: string;       
  content: string;      
  date: Date;           
  userId?: string;      
  articleId?: string;   
}