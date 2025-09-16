import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/news/news.module';
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
    private router: Router
  ) {}

  ngOnInit() {
    const articleId = this.route.snapshot.params['id'];
    this.article = this.newsService.getNewsById(articleId) || null;
    
    if (!this.article) {
      this.router.navigate(['/news']);
      return;
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

}