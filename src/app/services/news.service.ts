import { Injectable } from '@angular/core';
import { NewsArticle } from '../models/news/news.module';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: NewsArticle[] = [
    {
      id: 'booreau-newGame',
      title: 'Nosso novo projeto',
      excerpt: 'O início do desenvolvimento de BOOreau of Investigation',
      content: '<p>Estamos muito empolgados em anunciar que <strong>BOOreau of Investigation</strong> entrou oficialmente em desenvolvimento!</p><p>Esse é o nosso novo projeto: um jogo de investigação cômica onde você controla um detetive fantasmagórico capaz de possuir NPCs caricatos para resolver um misterioso assassinato. O que começou como uma ideia divertida agora está se tornando realidade, e mal podemos esperar para compartilhar cada etapa com vocês!</p>',
      date: new Date('2025-06-13'),
      author: 'Matheus Henrique',
      image: '',
      featured: true,
      tags: ['newGame', 'devlog'],
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
  const article = this.news.find(article => article.id === id);
  return article;
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