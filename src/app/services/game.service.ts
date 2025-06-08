import { Injectable } from '@angular/core';
import { Game } from '../models/game/game.module';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {
      id: 'echoes-of-the-past',
      title: 'Echoes of the Past',
      subtitle: 'Uma jornada através do tempo',
      tagline: 'Redescubra memórias perdidas em uma aventura emocionante',
      shortDescription: 'Um jogo narrativo sobre memória, tempo e as escolhas que nos definem.',
      fullDescription: 'Em Echoes of the Past, você assume o papel de um arquivista que descobre uma coleção de memórias antigas. À medida que explora essas memórias, você desvenda segredos de um passado esquecido e toma decisões que afetam o presente. Com mecânicas únicas de manipulação temporal e um sistema de diálogo dinâmico, cada escolha molda a narrativa de formas imprevisíveis.',
      genre: 'Aventura Narrativa',
      status: 'Em Desenvolvimento',
      platforms: ['PC', 'Nintendo Switch'],
      coverImage: '/assets/images/games/echoes-cover.jpg',
      bannerImage: '/assets/images/games/echoes-banner.jpg',
      screenshots: [
        {
          url: '/assets/images/games/echoes-screenshot1.jpg',
          caption: 'Explorando memórias antigas'
        },
        {
          url: '/assets/images/games/echoes-screenshot2.jpg',
          caption: 'Sistema de diálogo dinâmico'
        },
        {
          url: '/assets/images/games/echoes-screenshot3.jpg',
          caption: 'Quebra-cabeças temporais'
        }
      ],
      features: [
        {
          title: 'Narrativa Não-Linear',
          description: 'Suas escolhas afetam significativamente o rumo da história e os finais possíveis.',
          icon: '/assets/icons/story-icon.svg'
        },
        {
          title: 'Mecânicas Temporais',
          description: 'Manipule o tempo para resolver quebra-cabeças e desvendar segredos.',
          icon: '/assets/icons/time-icon.svg'
        },
        {
          title: 'Arte Única',
          description: 'Estilo visual impressionante que combina pixel art com técnicas modernas.',
          icon: '/assets/icons/art-icon.svg'
        }
      ],
      developmentUpdates: [
        {
          date: new Date('2025-01-15'),
          title: 'Primeiro Protótipo Funcional',
          description: 'Concluímos o primeiro protótipo jogável com as mecânicas básicas de manipulação temporal.'
        },
        {
          date: new Date('2025-03-22'),
          title: 'Sistema de Diálogo Implementado',
          description: 'O sistema de diálogo dinâmico foi integrado ao jogo, permitindo ramificações complexas.'
        }
      ],
      musicInfo: {
        description: 'Trilha sonora atmosférica composta por Daniel Costa, combinando elementos acústicos com sintetizadores vintage.',
        composer: 'Daniel Costa'
      },
      pressKit: {
        downloadUrl: '/assets/press-kits/echoes-presskit.zip',
        contactEmail: 'press@croissart.com'
      }
    },
    {
      id: 'neon-drifter',
      title: 'Neon Drifter',
      subtitle: 'Corra. Lute. Sobreviva.',
      tagline: 'Um jogo de corrida e combate em um mundo cyberpunk',
      shortDescription: 'Combine corridas de alta velocidade com combates intensos em um mundo distópico.',
      fullDescription: 'Neon Drifter é um jogo que mistura elementos de corrida arcade com combate em tempo real. Em um mundo cyberpunk decadente, você assume o papel de um mensageiro que deve entregar pacotes perigosos enquanto evade gangues rivais e forças corporativas. Personalize seu veículo, melhore suas armas e descubra os segredos da Cidade Nova.',
      genre: 'Ação/Corrida',
      status: 'Lançado',
      platforms: ['PC', 'PlayStation 5', 'Xbox Series X'],
      coverImage: '/assets/images/games/neon-cover.jpg',
      bannerImage: '/assets/images/games/neon-banner.jpg',
      screenshots: [
        {
          url: '/assets/images/games/neon-screenshot1.jpg',
          caption: 'Corrida em alta velocidade'
        },
        {
          url: '/assets/images/games/neon-screenshot2.jpg',
          caption: 'Combate veicular intenso'
        }
      ],
      features: [
        {
          title: 'Combate Veicular',
          description: 'Lute enquanto dirige com um sistema de combate único.',
          icon: '/assets/icons/combat-icon.svg'
        },
        {
          title: 'Customização Profunda',
          description: 'Modifique seu veículo e armas para se adequar ao seu estilo de jogo.',
          icon: '/assets/icons/custom-icon.svg'
        }
      ],
      musicInfo: {
        description: 'Trilha sonora synthwave pulsante que captura a essência do cyberpunk.'
      },
      pressKit: {
        downloadUrl: '/assets/press-kits/neon-presskit.zip',
        contactEmail: 'press@croissart.com'
      },
      releaseDate: new Date('2024-05-15'),
      steamUrl: 'https://store.steampowered.com/neondrifter'
    },
    {
      id: 'whispering-woods',
      title: 'Whispering Woods',
      subtitle: 'O mistério te espera',
      tagline: 'Um jogo de mistério e exploração em primeira pessoa',
      shortDescription: 'Explore uma floresta assombrada e desvende seus segredos sobrenaturais.',
      fullDescription: 'Whispering Woods é um jogo de exploração e mistério em primeira pessoa. Após se perder em uma floresta aparentemente comum, você começa a notar eventos estranhos e sobrenaturais. Com apenas uma lanterna e seu instinto, explore o ambiente, resolva quebra-cabeças e descubra a verdade por trás dos sussurros na floresta.',
      genre: 'Mistério/Exploração',
      status: 'Em Breve',
      platforms: ['PC', 'PlayStation 5', 'Xbox Series X'],
      coverImage: '/assets/images/games/whisper-cover.jpg',
      bannerImage: '/assets/images/games/whisper-banner.jpg',
      features: [
        {
          title: 'Atmosfera Imersiva',
          description: 'Ambiente cuidadosamente construído para uma experiência imersiva.',
          icon: '/assets/icons/immersion-icon.svg'
        },
        {
          title: 'Sistema de Luz Dinâmico',
          description: 'Use sua lanterna para interagir com o ambiente e revelar segredos.',
          icon: '/assets/icons/light-icon.svg'
        }
      ]
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