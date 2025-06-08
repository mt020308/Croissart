import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/news/news.module';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  article: NewsArticle | undefined;
  relatedArticles: NewsArticle[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const articleId = params['id'];
      this.article = this.newsService.getNewsById(articleId);
      
      if (this.article) {
        this.relatedArticles = this.newsService.getRelatedNews(articleId, this.article.tags[0]);
      } else {
        this.router.navigate(['/news']);
      }
    });
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