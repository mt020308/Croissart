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
    },
    {
      id: 'croissant-mascote',
      title: 'Conheça nosso mascote croissant!',
      excerpt: 'O curioso motivo por trás do mascote mais fofo (e amante de manteiga) que já existiu.',
      content: '<p>Sim, é isso mesmo que você está vendo: nosso mascote oficial é um croissant! 🥐</p><p>Mas antes que você se pergunte “por quê?”, deixa a gente contar essa história.</p><p>Tudo começou durante uma das nossas sessões de RPG — um dos passatempos que mais inspira nossas ideias e projetos. Um dos membros do grupo tinha um pet muito especial dentro da campanha: um pequeno croissant encantado, que insistia em se meter nas aventuras, se esconder em mochilas e salvar o grupo em momentos improváveis (geralmente rolando ladeira abaixo com muita manteiga envolvida).</p><p>O personagem rapidamente se tornou uma piada interna e, com o tempo, um símbolo do espírito que queremos passar em nossos jogos: criatividade, humor e aquele toque inesperado que faz tudo ficar mais leve e divertido.</p><p>Mas não foi só nostalgia que nos fez escolher o croissant. Ele representa também o nosso amor por ideias diferentes — por pegar algo simples e transformá-lo em algo com personalidade, alma e propósito. Assim como o pet de RPG virou um mascote lendário, queremos que nossos projetos também deixem uma marca única, divertida e memorável.</p><p>Então, da próxima vez que você ver esse croissant aparecendo em alguma arte, trailer ou até pescando em um cenário do jogo (sim, isso pode acontecer 👀), lembre-se: ele é mais do que um pãozinho amanteigado. Ele é o símbolo da nossa jornada criativa.</p><p><strong>Longa vida ao croissant!</strong></p>',
      date: new Date('2025-07-01'),
      author: 'Matheus Henrique',
      image: 'fofolhado2.png',
      featured: true,
      tags: ['devlog'],
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