import { Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { GamesComponent } from './games/games.component';
import { NewsComponent } from './news/news.component';
import { Ps5Component } from './ps5/ps5.component';
import { StoreComponent } from './store/store.component';
import { Ps5ConsoleComponent } from './ps5-console/ps5-console.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SubPsvr2Component } from './sub-psvr2/sub-psvr2.component';
import { PlaystationPcComponent } from './playstation-pc/playstation-pc.component';
import { Ps5AccessoriesComponent } from './ps5-accessories/ps5-accessories.component';
import { Ps4AccessoriesComponent } from './ps4-accessories/ps4-accessories.component';
import { PsvrAccessoriesComponent } from './psvr-accessories/psvr-accessories.component';
import { PcAccessoriesComponent } from './pc-accessories/pc-accessories.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LatestComponent } from './latest/latest.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { CartComponent } from './cart/cart.component';
import { PaynowComponent } from './paynow/paynow.component';
import { GooglePayButtonComponent } from '@google-pay/button-angular';
import { GameInfoComponent } from './game-info/game-info.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route redirects to login
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'games', component: GamesComponent },
    { path: 'playstation', component: Ps5Component },
    { path: 'accessories', component: AccessoriesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'store', component: StoreComponent },
    { path: 'ps5console', component: Ps5ConsoleComponent },
    { path: 'sub-psvr2', component: SubPsvr2Component },
    { path: 'playstation-pc', component: PlaystationPcComponent },
    { path: 'ps5-accessories', component: Ps5AccessoriesComponent },
    { path: 'ps4-accessories', component: Ps4AccessoriesComponent },
    { path: 'psvr-accessories', component: PsvrAccessoriesComponent },
    { path: 'pc-accessories', component: PcAccessoriesComponent },
    { path: 'latest', component: LatestComponent },
    { path: 'allgames', component: AllGamesComponent },
    { path: 'cart', component: CartComponent },
    { path: 'paynow', component: PaynowComponent },
    { path: 'top10games', component: GameInfoComponent },
    {path:'profile',component:ProfileComponent},
    { path: 'googlepay', component: GooglePayButtonComponent },
    { path: '**', redirectTo: 'login' } // Redirect any unknown routes to login
];