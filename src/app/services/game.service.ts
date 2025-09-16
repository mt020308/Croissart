import { Injectable } from '@angular/core';
import { Game } from '../models/game/game.module';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {
      id: 'booreau-of-investigation',
      title: 'BOOreau of Investigation',
      subtitle: 'Humor, mistério e possessões nada discretas',
      tagline: 'Investigue, possua NPCs e descubra a verdade por trás do assassinato',
      shortDescription: 'Um jogo de investigação cômica em que você é um detetive fantasmagórico capaz de possuir NPCs caricatos para desvendar mistérios.',
      fullDescription: 'Em BOOreau of Investigation, você assume o papel de um detetive com habilidades de projeção espiritual. Enviado para investigar o assassinato misterioso do excêntrico Sr. Cornélius Vencetti, você deve explorar sua mansão, coletar pistas e, acima de tudo, possuir NPCs caricatos para interagir com o mundo de formas únicas e hilárias. Cada personagem revela diálogos, segredos e acessos diferentes, tornando cada investigação imprevisível e cheia de humor.',
      genre: 'Investigação Cômica, Narrativa Interativa, Puzzle Leve',
      status: 'Em Desenvolvimento',
      platforms: ['PC'],
      coverImage: '',
      bannerImage: '',
      screenshots: [
        /*{
          url: '',
          caption: ''
        }*/
      ],
      features: [
        {
          title: 'Possessão Cômica',
          description: 'Saia do corpo e possua NPCs caricatos, cada um com diálogos e ações únicas.',
          icon: ''
        },
        {
          title: 'Investigação Criativa',
          description: 'Combine pistas, explore a mansão e use diferentes corpos para avançar na investigação.',
          icon: ''
        },
        {
          title: 'Narrativa Ramificada',
          description: 'Descubra múltiplos segredos e caminhos com base em suas escolhas e nas personalidades possuídas.',
          icon: ''
        },
        {
          title: 'Estilo Low Poly Caricato',
          description: 'Visual 3D estilizado com personagens exagerados e ambientes cheios de detalhes cômicos.',
          icon: ''
        },
        {
          title: 'Eventos Sobrenaturais Dinâmicos',
          description: 'Rituais que dão errado, aparições e fenômenos fantasmagóricos que mudam o rumo da investigação.',
          icon: ''
        },
        {
          title: 'Diário de Pistas Interativo',
          description: 'Todas as descobertas ficam registradas em um caderno prático, ajudando o jogador a organizar suspeitas e teorias.',
          icon: ''
        }
      ],
      developmentUpdates: [
        {
          date: new Date('2025-06-16'),
          title: 'Início do desenvolvimento do jogo',
          description: 'O projeto começou com a criação do GDD e os primeiros conceitos de arte e mecânicas.'
        },
        {
          date: new Date('2025-07-29'),
          title: 'Protótipos iniciais',
          description: 'Implementação do sistemas básicos.'
        },
        {
          date: new Date('2025-09-21'),
          title: 'Primeira fase jogável',
          description: 'Implementação dos modelos e mecânicas específicas.'
        }
      ],
      musicInfo: {
        description: 'Trilha sonora leve e misteriosa com piano, reforçando a atmosfera investigativa e bem-humorada.',
        composer: 'Eric Alves'
      },
      pressKit: {
        downloadUrl: '',
        contactEmail: ''
      }
    }
  ];

  constructor() {}

  getAllGames(): Game[] {
    return this.games;
  }

  getGameById(id: string): Game | undefined {
    return this.games.find(game => game.id === id);
  }

  getFeaturedGames(): Game[] {
    return this.games.filter(game => game.status !== 'Em Breve');
  }

  getGamesByStatus(status: 'Em Desenvolvimento' | 'Lançado' | 'Em Breve'): Game[] {
    return this.games.filter(game => game.status === status);
  }
}