import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'Ana Silva',
      role: 'Fundadora & Game Designer',
      bio: 'Apaixonada por narrativas interativas e mecânicas inovadoras, Ana lidera a visão criativa da Croissart.',
      photo: '/assets/images/team/ana-silva.jpg'
    },
    {
      name: 'Carlos Mendes',
      role: 'Desenvolvedor Principal',
      bio: 'Com mais de 8 anos de experiência em desenvolvimento, Carlos transforma ideias em realidade digital.',
      photo: '/assets/images/team/carlos-mendes.jpg'
    },
    {
      name: 'Beatriz Santos',
      role: 'Artist Director',
      bio: 'Responsável pela identidade visual única dos nossos jogos, Beatriz cria mundos visualmente deslumbrantes.',
      photo: '/assets/images/team/beatriz-santos.jpg'
    },
    {
      name: 'Daniel Costa',
      role: 'Compositor & Sound Designer',
      bio: 'Daniel cria as trilhas sonoras e efeitos que dão vida e emoção aos nossos jogos.',
      photo: '/assets/images/team/daniel-costa.jpg'
    }
  ];

  values: Value[] = [
    {
      title: 'Criatividade',
      description: 'Buscamos sempre soluções inovadoras e experiências únicas que surpreendam os jogadores.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Qualidade',
      description: 'Cada detalhe importa. Nos dedicamos a entregar produtos polidos e bem acabados.',
      icon: 'fas fa-gem'
    },
    {
      title: 'Paixão',
      description: 'Fazemos jogos porque amamos. Essa paixão se reflete em cada projeto que desenvolvemos.',
      icon: 'fas fa-heart'
    },
    {
      title: 'Comunidade',
      description: 'Valorizamos nossa comunidade e sempre ouvimos o feedback dos jogadores.',
      icon: 'fas fa-users'
    }
  ];

  ngOnInit() {}
}