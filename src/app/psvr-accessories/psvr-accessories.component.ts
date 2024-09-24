import { Component } from '@angular/core';
import { accessories, AccessoriesService } from '../accessories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-psvr-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './psvr-accessories.component.html',
  styleUrl: './psvr-accessories.component.css'
})
export class PsvrAccessoriesComponent {
  accessoriesList: accessories[] = [];

  constructor(private accessoriesService: AccessoriesService) { }

  ngOnInit(): void {
    // Fetch accessories by name
    this.accessoriesService.getProductsByName('PSVR').subscribe(data => {
      this.accessoriesList = data;
    });
  }
}
