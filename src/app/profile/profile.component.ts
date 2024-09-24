import { Component, OnInit } from '@angular/core';
import { PointsData, ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';
import { ClickerGameComponent } from "../clicker-game/clicker-game.component";
import { LatestComponent } from "../latest/latest.component";
import { CartComponent } from "../cart/cart.component";
import { AllGamesComponent } from "../all-games/all-games.component";
import { ContentGridConsoleComponent } from "../content-grid-console/content-grid-console.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ClickerGameComponent, LatestComponent, CartComponent, AllGamesComponent, ContentGridConsoleComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  pointsData: PointsData[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadPointsData();
  }

  loadPointsData(): void {
    this.profileService.getPointsData().subscribe({
      next: (data) => {
        this.pointsData = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching data';
        this.isLoading = false;
      }
    });
  }
}
