import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { GameService } from '../../services/game.service';
import { NewsService } from '../../services/news.service';
import { Game } from '../../models/game/game.module';
import { NewsArticle } from '../../models/news/news.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  featuredNews: NewsArticle[] = [];

  constructor(
    private gameService: GameService,
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadGames();
    this.loadFeaturedNews();
  }

  loadGames() {
    this.games = this.gameService.getAllGames();
  }

  loadFeaturedNews() {
    this.featuredNews = this.newsService.getFeaturedNews();
  }

  navigateToGame(gameId: string) {
    this.router.navigate(['/games', gameId]);
  }
}