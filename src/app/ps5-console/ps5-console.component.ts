import { Component, OnInit } from '@angular/core';
import { PlayStation, PsConsoleService } from '../ps-console.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../carousel/carousel.component";
import { ContentGridConsoleComponent } from "../content-grid-console/content-grid-console.component";
import { SubPsvr2Component } from "../sub-psvr2/sub-psvr2.component";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ps5-console',
  standalone: true,
  imports: [CommonModule, CarouselComponent, ContentGridConsoleComponent, SubPsvr2Component],
  templateUrl: './ps5-console.component.html',
  styleUrl: './ps5-console.component.css'
})
export class Ps5ConsoleComponent implements OnInit{
  playstations: PlayStation[] = [];  // Initialized with an empty array
  error: string='';

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