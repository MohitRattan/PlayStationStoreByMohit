import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-clicker-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clicker-game.component.html',
  styleUrl: './clicker-game.component.css'
})
export class ClickerGameComponent {
  score = 0;
  timeLeft = 10; // e.g., 10 seconds for the game
  gameActive = false;
  interval: any;
  userId: string | null = ''; // Store the logged-in user's ID

  constructor(private http: HttpClient, private authService: AuthService) {} // Inject AuthService

  ngOnInit() {
    // Retrieve the logged-in user's ID from AuthService
    this.userId = this.authService.getUserId();
  }

  startGame() {
    this.gameActive = true;
    this.score = 0;
    this.timeLeft = 10;

    // Start countdown
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.endGame();
      }
    }, 1000);
  }

  clickButton() {
    this.score++;
  }

  endGame() {
    clearInterval(this.interval);
    this.gameActive = false;

    // Send the score and userId to the backend
    if (this.userId) {
      this.saveScore(this.score, this.userId);
    }
  }

  saveScore(score: number, userId: string) {
    const body = { userId: userId, points: score }; // Use userId as userName
    this.http.post('https://localhost:7272/api/Scores', body).subscribe(
      (response) => {
        console.log('Score saved successfully:', response);
      },
      (error) => {
        console.error('Error saving score:', error);
      }
    );
  }
}
