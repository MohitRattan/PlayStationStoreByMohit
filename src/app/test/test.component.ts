import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule] ,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
