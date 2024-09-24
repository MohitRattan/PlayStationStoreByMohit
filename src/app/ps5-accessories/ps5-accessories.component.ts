import { Component, OnInit } from '@angular/core';
import { accessories, AccessoriesService } from '../accessories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ps5-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ps5-accessories.component.html',
  styleUrl: './ps5-accessories.component.css'
})
export class Ps5AccessoriesComponent implements OnInit {
  accessoriesList: accessories[] = [];

  constructor(private accessoriesService: AccessoriesService) { }

  ngOnInit(): void {
    // Fetch accessories by name
    this.accessoriesService.getProductsByName('PS5').subscribe(data => {
      this.accessoriesList = data;
    });
  }
}
