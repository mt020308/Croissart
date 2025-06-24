import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { CommentService } from '../../services/comment.service';
import { NewsArticle } from '../../models/news/news.module';
import { Comment } from '../../models/comment/comment.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  article: NewsArticle | null = null;
  newComment = '';
  editingCommentId: string | null = null;
  editCommentText = '';
  relatedArticles: NewsArticle[] = [];
  
  authService = {
    isLoggedIn: () => true, 
    getUserName: () => 'Usuário Teste',
    getUserId: () => '1',
    isAdminUser: () => false
  };

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private commentService: CommentService,
    private router: Router
  ) {}

  ngOnInit() {
    const articleId = this.route.snapshot.params['id'];
    this.article = this.newsService.getNewsById(articleId) || null;
    
    if (!this.article) {
      this.router.navigate(['/news']);
      return;
    }

    if (!this.article.comments) {
      this.article.comments = [];
    }

    this.loadRelatedArticles();
  }

  private loadRelatedArticles() {
    this.relatedArticles = [];
  }

  getCategoryName(tag: string): string {
    const categories: {[key: string]: string} = {
      'updates': 'Atualizações',
      'releases': 'Lançamentos',
      'events': 'Eventos',
      'devlog': 'Devlog'
    };
    return categories[tag] || tag;
  }

  navigateToArticle(articleId: string) {
    this.router.navigate(['/news', articleId]);
    window.scrollTo(0, 0);
  }

  addComment() {
    if (this.newComment.trim() && this.article && this.authService.isLoggedIn()) {
      const newComment: Comment = {
        id: Date.now().toString(),
        author: this.authService.getUserName() || 'Anônimo',
        content: this.newComment,
        date: new Date(),
        userId: this.authService.getUserId(),
        articleId: this.article.id
      };
      
      if (!this.article.comments) {
        this.article.comments = [];
      }
      
      this.article.comments.unshift(newComment);
      this.newComment = '';
    }
  }

  startEditComment(comment: Comment) {
    this.editingCommentId = comment.id;
    this.editCommentText = comment.content;
  }

  saveEditComment() {
    if (this.editingCommentId && this.article) {
      this.commentService.updateComment(
        this.article.id, 
        this.editingCommentId, 
        this.editCommentText
      );
      this.cancelEditComment();
    }
  }

  cancelEditComment() {
    this.editingCommentId = null;
    this.editCommentText = '';
  }

  deleteComment(commentId: string) {
    if (this.article && confirm('Tem certeza que deseja excluir este comentário?')) {
      this.commentService.deleteComment(this.article.id, commentId);
    }
  }

  canEditComment(comment: Comment): boolean {
    return this.commentService.canEditComment(comment);
  }
}