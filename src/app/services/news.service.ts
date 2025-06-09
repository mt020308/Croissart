import { Injectable } from '@angular/core';
import { NewsArticle } from '../models/news/news.module';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: NewsArticle[] = [
    {
      id: 'ecos-newGame',
      title: 'O nosso 1° projeto',
      excerpt: 'O começo do desenvolvimento do jogo: Ecos da Solidão',
      content: '<p>Estamos animados em anunciar que <strong>Ecos da Solidão</strong> está em desenvolvimento!</p><p>Nosso 1° projeto de jogo, uma simples ideia que surgiu numa madrugada agora se tornando realidade! Venha acompanhar o desenvolveimento desse jogo!</p>',
      date: new Date('2025-03-05'),
      author: 'Matheus Henrique',
      image: '',
      featured: true,
      tags: ['newGame', 'devlog']
    }
  ];

  constructor() {}

  getAllNews(): NewsArticle[] {
    return this.news.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getFeaturedNews(): NewsArticle[] {
    return this.getAllNews().filter(article => article.featured).slice(0, 3);
  }

  getNewsById(id: string): NewsArticle | undefined {
    return this.news.find(article => article.id === id);
  }

  getRelatedNews(currentId: string, tag: string): NewsArticle[] {
    return this.getAllNews()
      .filter(article => article.id !== currentId && article.tags.includes(tag))
      .slice(0, 3);
  }

  getNewsByTag(tag: string): NewsArticle[] {
    return this.getAllNews().filter(article => article.tags.includes(tag));
  }
}