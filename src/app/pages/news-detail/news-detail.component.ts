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

  // ===============================
  // 🔗 MÉTODOS DE COMPARTILHAMENTO
  // ===============================

  shareWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Confira esta notícia: ${this.article?.title}`);
    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
  }

  shareX() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Confira esta notícia: ${this.article?.title}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }

  async shareNative() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: this.article?.title,
          text: 'Confira esta notícia!',
          url: window.location.href
        });
      } catch (err) {
        console.log('Compartilhamento cancelado', err);
      }
    } else {
      alert('O compartilhamento nativo não é suportado neste dispositivo.');
    }
  }
}
