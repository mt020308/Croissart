import { NewsArticle } from './../../models/news/news.module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  allNews: NewsArticle[] = [];
  filteredNews: NewsArticle[] = [];
  selectedCategory = 'all';
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.allNews = this.newsService.getAllNews();
    this.filterNews();
  }

  filterNews() {
    if (this.selectedCategory === 'all') {
      this.filteredNews = [...this.allNews];
    } else {
      this.filteredNews = this.allNews.filter(article => 
        article.tags.includes(this.selectedCategory)
      );
    }
    
    this.totalPages = Math.ceil(this.filteredNews.length / this.itemsPerPage);
    this.currentPage = 1;
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

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  getPaginatedNews(): NewsArticle[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredNews.slice(startIndex, startIndex + this.itemsPerPage);
  }
}