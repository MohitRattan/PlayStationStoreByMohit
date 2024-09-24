import { Component } from '@angular/core';
import { Ps5ConsoleComponent } from "../ps5-console/ps5-console.component";
import { PlayStation, PsConsoleService } from '../ps-console.service';
import { CommonModule } from '@angular/common';
import { AccessoriesComponent } from "../accessories/accessories.component";
import { PcAccessoriesComponent } from "../pc-accessories/pc-accessories.component";
import { Ps4AccessoriesComponent } from "../ps4-accessories/ps4-accessories.component";
import { Ps5AccessoriesComponent } from "../ps5-accessories/ps5-accessories.component";
import { PsvrAccessoriesComponent } from "../psvr-accessories/psvr-accessories.component";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [Ps5ConsoleComponent, CommonModule, AccessoriesComponent, PcAccessoriesComponent, Ps4AccessoriesComponent, Ps5AccessoriesComponent, PsvrAccessoriesComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  playstations: PlayStation[] = [];
  error: string = '';

  constructor(private playStationService: PsConsoleService) {}

  ngOnInit(): void {
    this.fetchPlayStations();
  }

  fetchPlayStations(): void {
    this.playStationService.getPlayStations().subscribe(
      (data) => {
        this.playstations = data;
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
