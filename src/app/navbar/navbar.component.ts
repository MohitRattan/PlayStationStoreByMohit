import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { PlayStation, PsConsoleService } from '../ps-console.service';
import { StoreComponent } from "../store/store.component";
import { NewsComponent } from "../news/news.component";
import { AccessoriesComponent } from "../accessories/accessories.component";
import { Ps5Component } from "../ps5/ps5.component";
import { GamesComponent } from "../games/games.component";
import { SubPsvr2Component } from "../sub-psvr2/sub-psvr2.component";
import { ContentGridConsoleComponent } from "../content-grid-console/content-grid-console.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [StoreComponent, NewsComponent, AccessoriesComponent, Ps5Component, GamesComponent, RouterLink, CommonModule, SubPsvr2Component, ContentGridConsoleComponent, CarouselComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  slides = [
    { imageUrl: '/images/1.png', title: '' },
    { imageUrl: '/images/2.png', },
    { imageUrl: '/images/3.png', },
    { imageUrl: '/images/4.png', },
    { imageUrl: '/images/5.png', },
    { imageUrl: '/images/6.png', },
    { imageUrl: '/images/7.png', },
    { imageUrl: '/images/8.png', },
    { imageUrl: '/images/9.png', },
    { imageUrl: '/images/10.png', },
    { imageUrl: '/images/11.png', },
    { imageUrl: '/images/12.png', },
    { imageUrl: '/images/13.png', },
    { imageUrl: '/images/14.png', },
    { imageUrl: '/images/15.png', },
    { imageUrl: '/images/16.png', },
    { imageUrl: '/images/17.png', },
    { imageUrl: '/images/18.png', },
    { imageUrl: '/images/19.png', },
    { imageUrl: '/images/20.png', },
    { imageUrl: '/images/21.png', },
    { imageUrl: '/images/22.png', },
    { imageUrl: '/images/23.png', },
    { imageUrl: '/images/24.png', },
    { imageUrl: '/images/25.png', },
    { imageUrl: '/images/26.png', },
    { imageUrl: '/images/27.png', },
    { imageUrl: '/images/28.png', },
    { imageUrl: '/images/29.png', },
    // { imageUrl: '/images/29.png',  },
    { imageUrl: '/images/30.png', },
    { imageUrl: '/images/31.png', },
    { imageUrl: '/images/32.png', },
    { imageUrl: '/images/33.png', },
    { imageUrl: '/images/34.png', },
    { imageUrl: '/images/35.png', },
    { imageUrl: '/images/36.png', },
    { imageUrl: '/images/37.png', },
    { imageUrl: '/images/38.png', },
    { imageUrl: '/images/39.png', },
    { imageUrl: '/images/40.png', },
    { imageUrl: '/images/41.png', },
    { imageUrl: '/images/42.png', },
    { imageUrl: '/images/43.png', },
    { imageUrl: '/images/44.png', },
    { imageUrl: '/images/45.png', },
    { imageUrl: '/images/46.png', },
    { imageUrl: '/images/47.png', },
    { imageUrl: '/images/48.png', },
    { imageUrl: '/images/49.png', },
    { imageUrl: '/images/50.png', },
    { imageUrl: '/images/51.png', },
    { imageUrl: '/images/52.png', },
    { imageUrl: '/images/53.png', },
    { imageUrl: '/images/54.png', },
    // { imageUrl: '/images/55.png',  },
    { imageUrl: '/images/56.png', },
    { imageUrl: '/images/57.png', },
    { imageUrl: '/images/58.png', },
    { imageUrl: '/images/59.png', },
    { imageUrl: '/images/60.png', },
    { imageUrl: '/images/61.png', },
    { imageUrl: '/images/62.png', },
    { imageUrl: '/images/63.png', },
    { imageUrl: '/images/64.png', },
    { imageUrl: '/images/65.png', },
    { imageUrl: '/images/66.png', },
    { imageUrl: '/images/67.png', },
    { imageUrl: '/images/68.png', },
    { imageUrl: '/images/69.png', },
    { imageUrl: '/images/70.png', },
    { imageUrl: '/images/71.png', },
    { imageUrl: '/images/72.png', },
    { imageUrl: '/images/73.png', },
    { imageUrl: '/images/74.png', },
    { imageUrl: '/images/75.png', },
    { imageUrl: '/images/76.png', },
    { imageUrl: '/images/77.png', },
    { imageUrl: '/images/78.png', },
    { imageUrl: '/images/79.png', },
    { imageUrl: '/images/80.png', },
    { imageUrl: '/images/81.png', },
    { imageUrl: '/images/82.png', },
    { imageUrl: '/images/83.png', },


  ];
  currentSlideIndex = 0;
  constructor(public authService: AuthService,
    private router: Router) { }


  currentSlide = 0;

  ngOnInit(): void {
    this.startAutoSlide();

  }

  isSlideActive(index: number): boolean {
    return this.currentSlide === index;
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 10);
  }

  // Get the logged-in username
  getUsername(): string {
    return this.authService.getUsername();
  }
  getProfilePictureUrl(): string {
    const base64String = this.authService.getProfilePictureUrl();
    return base64String ? `data:image/jpeg;base64,${base64String}` : '';
  }
  // Logout function
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}