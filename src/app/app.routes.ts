import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'games',
    loadComponent: () => import('./pages/games/games.component').then(m => m.GamesComponent)
  },
  {
    path: 'games/:id',
    loadComponent: () => import('./pages/game-detail/game-detail.component').then(m => m.GameDetailComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent)
  },
  {
    path: 'news/:id', 
    loadComponent: () => import('./pages/news-detail/news-detail.component').then(m => m.NewsDetailComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { 
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  { 
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];