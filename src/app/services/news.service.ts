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
      content: '<p>Estamos muito empolgados em anunciar que <strong>BOOreau of Investigation</strong> entrou oficialmente em desenvolvimento!</p> <br> <p>Esse é o nosso novo projeto: um jogo de investigação cômica onde você controla um detetive fantasmagórico capaz de possuir NPCs caricatos para resolver um misterioso assassinato. O que começou como uma ideia divertida agora está se tornando realidade, e mal podemos esperar para compartilhar cada etapa com vocês!</p>',
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
      content: '<p>Sim, é isso mesmo que você está vendo: nosso mascote oficial é um croissant! 🥐</p> <br> <p>Mas antes que você se pergunte “por quê?”, deixa a gente contar essa história.</p> <br> <p>Tudo começou durante uma das nossas sessões de RPG, um dos passatempos que mais inspira nossas ideias e projetos. Um dos membros do grupo tinha um pet muito especial dentro da campanha: um pequeno croissant encantado, que insistia em se meter nas aventuras, se esconder em mochilas e salvar o grupo em momentos improváveis (geralmente rolando ladeira abaixo).</p> <br> <p>O personagem rapidamente se tornou uma piada interna e, com o tempo, um símbolo do espírito que queremos passar em nossos jogos: criatividade, humor e aquele toque inesperado que faz tudo ficar mais leve e divertido.</p> <br> <p>Mas não foi só nostalgia que nos fez escolher o croissant. Ele representa também o nosso amor por ideias diferentes, por pegar algo simples e transformá-lo em algo com personalidade, alma e propósito. Assim como o pet de RPG virou um mascote lendário, queremos que nossos projetos também deixem uma marca única, divertida e memorável.</p> <br> <p>Então, da próxima vez que você ver esse croissant aparecendo em alguma arte, trailer ou até passeando em um cenário do jogo (sim, isso pode acontecer), lembre-se: ele é mais do que um pãozinho amanteigado. Ele é o símbolo da nossa jornada criativa.</p> <br> <p><strong>Longa vida ao croissant!</strong></p>',
      date: new Date('2025-07-01'),
      author: 'Matheus Henrique',
      image: 'fofolhado2.png',
      featured: true,
      tags: ['devlog'],
    },
    {
      id: 'concept-characters',
      title: 'Primeiras Concept Arts: Verônica e Otávio ganham vida!',
      excerpt: 'Conheça os rostos — e as histórias — por trás dos personagens do BOOreau of Investigation.',
      content: '<p>Estamos animados em apresentar as primeiras <strong>concept arts oficiais</strong> dos personagens de <em>BOOreau of Investigation</em>! E, claro, começando por dois dos nomes mais comentados entre nossa equipe: <strong>Verônica</strong> e <strong>Otávio</strong>.</p> <br> <p>Essas artes marcam o início da transformação das ideias e personalidades do roteiro em figuras visuais que realmente habitam o mundo do jogo. Nosso objetivo era equilibrar o humor estilizado do projeto com o mistério e a elegância que cercam a trama, e o artista conseguiu capturar isso com maestria.</p> <br> <img src="veronica2.png"/> <br> <h3>Verônica – A Esposa Jovem</h3><p>Verônica é o tipo de personagem que entra em cena e faz o ambiente parar. Com sua postura confiante e o charme de uma dama vitoriana moderna, ela carrega uma aura de mistério que deixa todos se perguntando: inocente ou manipuladora? A estética <em>low-poly</em> reforça o contraste entre sua delicadeza e o drama de suas intenções. O cabelo vermelho-púrpura vibrante, a gola de plumas e os detalhes dourados no vestido criam uma presença visual poderosa, uma combinação perfeita entre luxo, elegância e segredos não ditos.</p> <br> <p>Durante o processo criativo, a equipe buscou transmitir essa dualidade: uma mulher que pode ser tanto vítima quanto mente por trás de algo maior. Seu olhar lavanda e sorriso enigmático fazem mais do que revelar sua beleza, eles insinuam que Verônica sabe mais do que parece.</p> <br> <img src="otavio.jpg"/> <h3>Otávio – O Sobrinho</h3><p>Já Otávio representa o oposto em quase todos os sentidos. Ambicioso, ressentido e artisticamente frustrado, ele é o tipo de personagem que você entende... mas não sabe se pode confiar. A concept art o apresenta de forma sóbria e melancólica: cabelos escuros ligeiramente despenteados, olhar cansado e postura defensiva. Tudo nele comunica tensão, de suas olheiras marcantes às mãos cruzadas no peito.</p> <br> <p>O visual mistura nostalgia e desconforto: shorts formais, meias longas, uma bolsa lateral e um semblante que parece sempre à beira de uma reclamação. Ele é o artista que nunca recebeu reconhecimento, e isso o torna um dos suspeitos mais intrigantes da trama.</p> <br> <h3>Um Mundo em Construção</h3><p>Essas concept arts não apenas definem o visual dos personagens, mas ajudam a consolidar a atmosfera do jogo: um universo de tons suaves, detalhes históricos e uma pitada de humor sombrio. Cada traço foi pensado para refletir tanto o <em>mistério</em> quanto o <em>absurdo</em> que guiam a narrativa de <strong>BOOreau of Investigation</strong>.</p> <br> <p>Fiquem atentos — nas próximas semanas, vamos revelar mais artes e detalhes dos outros personagens que completam esse elenco peculiar (e suspeito).</p> <br> <p><strong>O caso está apenas começando...</strong></p>',
      date: new Date('2025-07-26'),
      author: 'Vitor Henrique',
      image: '',
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