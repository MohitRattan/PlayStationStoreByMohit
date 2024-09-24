import { Component } from '@angular/core';
import { ClickerGameComponent } from "../clicker-game/clicker-game.component";
import { CatchTheBallGameComponent } from "../catch-the-ball-game/catch-the-ball-game.component";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [ClickerGameComponent, CatchTheBallGameComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

}
