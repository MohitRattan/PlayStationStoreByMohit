import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Import Router
import { GameService } from '../game.service';
import { AllgamesService } from '../allgames.service';
import { AllGamesComponent } from "../all-games/all-games.component";
import { SubPsvr2Component } from "../sub-psvr2/sub-psvr2.component";

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [CommonModule, AllGamesComponent, RouterLink, SubPsvr2Component],
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']  // Updated styleUrl to styleUrls
})
export class LatestComponent {
  games: any[] = [];
  allgames: any[] = [];
  displayedGames: any[] = [];
  showAll: boolean = false;

  constructor(
    private gameService: GameService,
    private allgamesService: AllgamesService,private router: Router
  ) {}

  ngOnInit(): void {
    this.loadGames();
    this.loadAllGames();
  }

  loadGames(): void {
    this.gameService.getGames().subscribe(
      (data) => {
        this.games = data;
      },
      (error) => {
        console.error('Error fetching games', error);
      }
    );
  }

  loadAllGames(): void {
    this.allgamesService.getallGames().subscribe(
      (data) => {
        this.allgames = data;
        this.displayedGames = this.allgames.slice(0, 9);
      },
      (error) => {
        console.error('Error fetching all games', error);
      }
    );
  }

  viewAllGames(): void {
    this.router.navigate(['/allgames']);
  }

  scrollLeft(carousel: HTMLElement) {
    carousel.scrollBy({
      left: -200, // Adjust scroll distance
      behavior: 'smooth'
    });
  }

  scrollRight(carousel: HTMLElement) {
    carousel.scrollBy({
      left: 200, // Adjust scroll distance
      behavior: 'smooth'
    });
  }
}
