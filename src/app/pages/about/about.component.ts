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
      name: 'Matheus Henrique',
      role: 'Fundador & Game Designer & Desenvolvedor Principal',
      bio: 'Apaixonado por narrativas interativas e mecânicas inovadoras, Matheus lidera a visão criativa da Croissart.',
      photo: "matheus.png"
    },
    {
      name: 'Eric Alves',
      role: 'Desenvolvedor & Compositor & Sound Designer',
      bio: '',
      photo: 'eric2.jpg'
    },
    {
      name: 'Vitor Fortunato',
      role: 'Diretor Artístico & Designer',
      bio: 'Responsável pela identidade visual única dos nossos jogos, Vitor cria mundos visualmente deslumbrantes.',
      photo: 'vitor.png'
    },
    {
      name: 'Bruno Eduardo',
      role: 'Engenheiro Sonoro & Designewr UX/UI',
      bio: 'Bruno cria interfaces e efeitos que dão vida e emoção aos nossos jogos.',
      photo: 'bruno.png'
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