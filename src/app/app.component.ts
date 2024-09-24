import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { Ps5ConsoleComponent } from "./ps5-console/ps5-console.component";
import { FooterComponent } from "./footer/footer.component";
import { SubPsvr2Component } from "./sub-psvr2/sub-psvr2.component";
import { ContentGridConsoleComponent } from "./content-grid-console/content-grid-console.component";
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { GameInfoComponent } from "./game-info/game-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, CarouselComponent, Ps5ConsoleComponent, FooterComponent, SubPsvr2Component, ContentGridConsoleComponent, GooglePayButtonModule, GameInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gaming_Store';
}
