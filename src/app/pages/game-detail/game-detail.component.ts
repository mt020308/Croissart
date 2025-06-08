import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game, Screenshot } from '../../models/game/game.module';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game | undefined;
  lightboxOpen = false;
  currentScreenshotIndex = 0;
  currentScreenshot: Screenshot | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const gameId = params['id'];
      this.game = this.gameService.getGameById(gameId);
      
      if (!this.game) {
        this.router.navigate(['/games']);
      }
    });
  }

  openLightbox(index: number) {
    if (this.game?.screenshots) {
      this.currentScreenshotIndex = index;
      this.currentScreenshot = this.game.screenshots[index];
      this.lightboxOpen = true;
    }
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.currentScreenshot = null;
  }

  nextScreenshot() {
    if (this.game?.screenshots) {
      this.currentScreenshotIndex = (this.currentScreenshotIndex + 1) % this.game.screenshots.length;
      this.currentScreenshot = this.game.screenshots[this.currentScreenshotIndex];
    }
  }

  previousScreenshot() {
    if (this.game?.screenshots) {
      this.currentScreenshotIndex = 
        this.currentScreenshotIndex === 0 
          ? this.game.screenshots.length - 1 
          : this.currentScreenshotIndex - 1;
      this.currentScreenshot = this.game.screenshots[this.currentScreenshotIndex];
    }
  }
}