import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game/game.module';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit() {
    this.games = this.gameService.getAllGames();
  }

  navigateToGame(gameId: string) {
    this.router.navigate(['/games', gameId]);
  }
}