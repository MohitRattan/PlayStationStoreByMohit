import { Component } from '@angular/core';
import { accessories, AccessoriesService } from '../accessories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ps4-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ps4-accessories.component.html',
  styleUrl: './ps4-accessories.component.css'
})
export class Ps4AccessoriesComponent {
  accessoriesList: accessories[] = [];

  constructor(private accessoriesService: AccessoriesService) { }

  ngOnInit(): void {
    // Fetch accessories by name
    this.accessoriesService.getProductsByName('PS4').subscribe(data => {
      this.accessoriesList = data;
    });
  }
}
