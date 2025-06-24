import { Injectable } from '@angular/core';
import { NewsArticle } from '../models/news/news.module';
import { NewsService } from './news.service';
import { Comment } from '../models/comment/comment.module';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  private authService = {
    isLoggedIn: () => true,
    getUserName: () => 'Usuário Teste',
    getUserId: () => '1',
    isAdminUser: () => false
  };
  
  constructor(
    private newsService: NewsService
  ) {}

  createComment(content: string, articleId: string): Comment {
    return {
      id: this.generateId(),
      author: this.authService.getUserName() || 'Anônimo',
      content,
      date: new Date(),
      userId: this.authService.getUserId(),
      articleId
    };
  }

  updateComment(articleId: string, commentId: string, newContent: string): boolean {
    const article = this.newsService.getNewsById(articleId);
    if (article && article.comments) {
      const comment = article.comments.find(c => c.id === commentId);
      if (comment) {
        comment.content = newContent;
        return true;
      }
    }
    return false;
  }

  deleteComment(articleId: string, commentId: string): boolean {
    const article = this.newsService.getNewsById(articleId);
    if (article && article.comments) {
      article.comments = article.comments.filter(c => c.id !== commentId);
      return true;
    }
    return false;
  }

  canEditComment(comment: Comment): boolean {
    return this.authService.isLoggedIn() && 
           (this.authService.isAdminUser() || comment.userId === this.authService.getUserId());
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}