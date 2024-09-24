import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {


  selectedImage: string = 'https://gmedia.playstation.com/is/image/SIEPDC/concord-keyart-01-en-25jan24?$1200px$';
  photos: string[] = [
    'https://gmedia.playstation.com/is/image/SIEPDC/concord-keyart-01-en-25jan24?$1200px$',
    'https://gmedia.playstation.com/is/image/SIEPDC/valorant-keyart-01-en-31may24?$1200px$',
    'https://gmedia.playstation.com/is/image/SIEPDC/Fortnite-Battle-Royale-CH5S4-keyart-01-13aug24$en?$1200px$',
    'https://gmedia.playstation.com/is/image/SIEPDC/Civilization-VII-keyart-en-01-15aug24?$1200px$',
    'https://gmedia.playstation.com/is/image/SIEPDC/concord-keyart-01-en-25jan24?$1200px$',

    'https://gmedia.playstation.com/is/image/SIEPDC/dragon-age-the-veilguard-keyart-01-en-28jun24?$1200px$',
    
  ];

  updateSelectedImage(photo: string): void {
    this.selectedImage = photo;
  }


}