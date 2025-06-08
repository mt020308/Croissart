import { Injectable } from '@angular/core';
import { NewsArticle } from '../models/news/news.module';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: NewsArticle[] = [
    {
      id: 'echoes-alpha',
      title: 'Alpha de Echoes of the Past disponível para testadores selecionados',
      excerpt: 'A primeira versão alpha do nosso próximo jogo está disponível para um grupo seleto de testadores.',
      content: '<p>Estamos animados em anunciar que a primeira versão alpha de <strong>Echoes of the Past</strong> está agora disponível para um grupo seleto de testadores. Esta versão inicial inclui o primeiro capítulo da história, apresentando as mecânicas básicas de manipulação temporal e o sistema de diálogo dinâmico.</p><p>Os testadores selecionados receberam acesso via e-mail e serão essenciais para moldar o futuro do jogo com seus feedbacks.</p>',
      date: new Date('2025-02-10'),
      author: 'Ana Silva',
      image: '/assets/images/news/echoes-alpha.jpg',
      featured: true,
      tags: ['updates', 'devlog']
    },
    {
      id: 'neon-update',
      title: 'Atualização 1.2 de Neon Drifter disponível agora',
      excerpt: 'A maior atualização de Neon Drifter até agora traz novos eventos e melhorias.',
      content: '<p>A atualização 1.2 de <strong>Neon Drifter</strong> está agora disponível em todas as plataformas. Esta atualização inclui:</p><ul><li>Novo evento sazonal: "Corrida Fantasma"</li><li>Três novos veículos</li><li>Melhorias no sistema de física</li><li>Correções de bugs e balanceamentos</li></ul><p>Esta é nossa maior atualização pós-lançamento até agora, e estamos ansiosos para ouvir o que vocês acham!</p>',
      date: new Date('2024-07-15'),
      author: 'Carlos Mendes',
      image: '/assets/images/news/neon-update.jpg',
      featured: true,
      tags: ['updates', 'releases']
    },
    {
      id: 'game-awards',
      title: 'Neon Drifter indicado ao Melhor Jogo Indie no Game Awards',
      excerpt: 'Nosso jogo foi reconhecido entre os melhores do ano na categoria indie.',
      content: '<p>Estamos honrados em anunciar que <strong>Neon Drifter</strong> foi indicado ao prêmio de Melhor Jogo Indie no Game Awards deste ano!</p><p>Esta indicação é um reconhecimento incrível do trabalho árduo de nossa pequena equipe e do apoio de nossa comunidade. Os vencedores serão anunciados na cerimônia no próximo mês.</p>',
      date: new Date('2024-11-20'),
      author: 'Beatriz Santos',
      image: '/assets/images/news/game-awards.jpg',
      featured: true,
      tags: ['events', 'awards']
    },
    {
      id: 'whispering-teaser',
      title: 'Primeiro teaser de Whispering Woods revelado',
      excerpt: 'Confira o primeiro teaser do nosso próximo jogo de terror psicológico.',
      content: '<p>Hoje revelamos o primeiro teaser de <strong>Whispering Woods</strong>, nosso próximo jogo de mistério e terror psicológico. O teaser oferece um vislumbre da atmosfera única do jogo e da floresta assombrada que os jogadores explorarão.</p><p>O jogo está em desenvolvimento para PC e consoles da próxima geração, com lançamento previsto para 2025.</p>',
      date: new Date('2025-01-05'),
      author: 'Ana Silva',
      image: '/assets/images/news/whispering-teaser.jpg',
      featured: false,
      tags: ['updates', 'devlog']
    },
    {
      id: 'devlog-3',
      title: 'Devlog #3: O Sistema de Diálogo de Echoes of the Past',
      excerpt: 'Um mergulho técnico em nosso sistema de diálogo ramificado.',
      content: '<p>Em nosso terceiro devlog, detalhamos o complexo sistema de diálogo de <strong>Echoes of the Past</strong>. Criamos um sistema que:</p><ul><li>Permite mais de 1.000 linhas de diálogo únicas</li><li>Reage às escolhas anteriores do jogador</li><li>Muda dinamicamente baseado no estado do mundo</li></ul><p>Este sistema é fundamental para nossa visão de uma narrativa verdadeiramente reativa.</p>',
      date: new Date('2025-03-01'),
      author: 'Carlos Mendes',
      image: '/assets/images/news/devlog-3.jpg',
      featured: false,
      tags: ['devlog']
    },
    {
      id: 'evento-sp',
      title: 'Conheça a equipe no Brasil Game Show 2025',
      excerpt: 'Parte da equipe estará no evento para conversar com os fãs.',
      content: '<p>Estaremos na <strong>Brasil Game Show 2025</strong> com um estande onde parte da equipe estará disponível para conversar com os fãs, autografar cópias e dar prévias exclusivas de nossos próximos projetos.</p><p>O evento acontece de 10 a 15 de outubro no Expo Center Norte em São Paulo. Venha nos visitar!</p>',
      date: new Date('2025-09-15'),
      author: 'Beatriz Santos',
      image: '/assets/images/news/evento-sp.jpg',
      featured: false,
      tags: ['events']
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