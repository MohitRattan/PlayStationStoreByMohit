import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

interface Ball {
  x: number;
  y: number;
  size: number;
}

@Component({
  selector: 'app-catch-the-ball-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catch-the-ball-game.component.html',
  styleUrl: './catch-the-ball-game.component.css'
})
export class CatchTheBallGameComponent {
  paddleX = 250;
  balls: Ball[] = [];
  score = 0;
  ballSpeed = 2;
  paddleSpeed = 20;
  ballInterval: any;
  ballSpawnInterval: any;
  gameOver = false;

  ngOnInit(): void {
    this.startGame();
  }

  ngOnDestroy(): void {
    clearInterval(this.ballInterval);
    clearInterval(this.ballSpawnInterval);
  }

  startGame(): void {
    this.ballSpawnInterval = setInterval(() => {
      if (!this.gameOver) {
        this.spawnBall();
      }
    }, 1000);

    this.ballInterval = setInterval(() => {
      if (!this.gameOver) {
        this.moveBalls();
        this.checkCollision();
      }
    }, 20);
  }

  spawnBall(): void {
    const size = Math.random() * 20 + 10;
    this.balls.push({
      x: Math.random() * (window.innerWidth - size),
      y: 0,
      size
    });
  }

  moveBalls(): void {
    this.balls.forEach(ball => {
      ball.y += this.ballSpeed;
    });

    this.balls = this.balls.filter(ball => ball.y < window.innerHeight);
  }

  checkCollision(): void {
    this.balls.forEach(ball => {
      if (
        ball.y + ball.size > window.innerHeight - 20 &&
        ball.x + ball.size > this.paddleX &&
        ball.x < this.paddleX + 100
      ) {
        this.score++;
        this.balls = this.balls.filter(b => b !== ball);
      }
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft' && this.paddleX > 0) {
      this.paddleX -= this.paddleSpeed;
    } else if (event.key === 'ArrowRight' && this.paddleX < window.innerWidth - 100) {
      this.paddleX += this.paddleSpeed;
    }
  }
}