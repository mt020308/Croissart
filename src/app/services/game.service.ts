import { Injectable } from '@angular/core';
import { Game } from '../models/game/game.module';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {
      id: 'ecos-da-solidao',
      title: 'Ecos da Solidão',
      subtitle: 'Uma jornada de reflexão',
      tagline: 'Redescubra memórias perdidas em uma aventura emocionante',
      shortDescription: 'Um jogo narrativo sobre memória, emoções e as escolhas que nos definem.',
      fullDescription: 'Em Ecos da Solidão, você assume o papel de um homem que acaba de acordar em um arquipélago. Aventure-se pelas ilhas e descubra a história por trás delas, os acontecimentos desse lugar, e acima de tudo, quem você é.',
      genre: 'Aventura Narrativa, Terror Psicológico, Puzzle',
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
          title: 'Narrativa Não-Linear',
          description: 'Suas escolhas afetam significativamente o rumo da história e os finais possíveis.',
          icon: ''
        },
        {
          title: 'Puzzles imersivos',
          description: 'Os puzzles te prendem no jogo, tanto para descobrir sobre a história do jogo, quanto para resolvê-los.',
          icon: ''
        },
        {
          title: 'Arte Única',
          description: 'Estilo visual impressionante que combina pixel art com técnicas modernas.',
          icon: ''
        }
      ],
      developmentUpdates: [
        {
          date: new Date('2025-05-10'),
          title: 'Início do desenvolvimento do jogo',
          description: 'O dia que começamos a fazer o jogo, usando a Unreal Engine 5.'
        },
        {
          date: new Date('2025-05-31'),
          title: 'Protótipos',
          description: 'Criação dos 1° protótipos de modelos do jogo, incluindo personagens e cenários.'
        }
      ],
      musicInfo: {
        description: 'Trilha sonora atmosférica composta por Eric Alves e Bruno Eduardo, combinando elementos acústicos com sintetizadores vintage.',
        composer: 'Eric Alves e Bruno Eduardo'
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