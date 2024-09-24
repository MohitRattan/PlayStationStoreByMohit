import { Component, OnInit } from '@angular/core';
import { GameinfoService } from '../gameinfo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css'] // Corrected 'styleUrls'
})
export class GameInfoComponent implements OnInit {
  games: any[] = [];
  currentIndex = 0;

  constructor(private gameService: GameinfoService) { }

  ngOnInit(): void {
    this.fetchGames();
  }

  fetchGames(): void {
    this.gameService.getGames().subscribe(
      (data: any[]) => { // Ensure data type matches
        this.games = data;
      },
      (error) => {
        console.error('Error fetching games', error);
      }
    );
  }

  addToCart(game: any): void {
    console.log('Add to cart:', game);
    // Add-to-cart logic goes here
  }

nextGame(): void {
  if (this.currentIndex < this.games.length - 1) {
    this.currentIndex++;
  }
}

previousGame(): void {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}

}
