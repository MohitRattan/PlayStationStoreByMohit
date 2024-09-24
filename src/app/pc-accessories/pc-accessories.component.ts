import { Component } from '@angular/core';
import { accessories, AccessoriesService } from '../accessories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pc-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pc-accessories.component.html',
  styleUrl: './pc-accessories.component.css'
})
export class PcAccessoriesComponent {
  accessoriesList: accessories[] = [];

  constructor(private accessoriesService: AccessoriesService) { }

  ngOnInit(): void {
    // Fetch accessories by name
    this.accessoriesService.getProductsByName('PC').subscribe(data => {
      this.accessoriesList = data;
    });
  }
}
