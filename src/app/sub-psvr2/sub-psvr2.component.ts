import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-sub-psvr2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-psvr2.component.html',
  styleUrls: ['./sub-psvr2.component.css']
})
export class SubPsvr2Component implements OnInit {
  slides = [
    { imageUrl: '/images/1.png', title: '' },
    { imageUrl: '/images/2.png',  },
    { imageUrl: '/images/3.png',  },
    { imageUrl: '/images/4.png',  },
    { imageUrl: '/images/5.png',  },
    { imageUrl: '/images/6.png',  },
    { imageUrl: '/images/7.png',  },
    { imageUrl: '/images/8.png',  },
    { imageUrl: '/images/9.png',  },
    { imageUrl: '/images/10.png',  },
    { imageUrl: '/images/11.png',  },
    { imageUrl: '/images/12.png',  },
    { imageUrl: '/images/13.png',  },
    { imageUrl: '/images/14.png',  },
    { imageUrl: '/images/15.png',  },
    { imageUrl: '/images/16.png',  },
    { imageUrl: '/images/17.png',  },
    { imageUrl: '/images/18.png',  },
    { imageUrl: '/images/19.png',  },
    { imageUrl: '/images/20.png',  },
    { imageUrl: '/images/21.png',  },
    { imageUrl: '/images/22.png',  },
    { imageUrl: '/images/23.png',  },
    { imageUrl: '/images/24.png',  },
    { imageUrl: '/images/25.png',  },
    { imageUrl: '/images/26.png',  },
    { imageUrl: '/images/27.png',  },
    { imageUrl: '/images/28.png',  },
    { imageUrl: '/images/29.png',  },
    { imageUrl: '/images/30.png',  },
    { imageUrl: '/images/31.png',  },
    { imageUrl: '/images/32.png',  },
    { imageUrl: '/images/33.png',  },
    { imageUrl: '/images/34.png',  },
    { imageUrl: '/images/35.png',  },
    { imageUrl: '/images/36.png',  },
    { imageUrl: '/images/37.png',  },
    { imageUrl: '/images/38.png',  },
    { imageUrl: '/images/39.png',  },
    { imageUrl: '/images/40.png',  },
    { imageUrl: '/images/41.png',  },
    { imageUrl: '/images/42.png',  },
    { imageUrl: '/images/43.png',  },
    { imageUrl: '/images/44.png',  },
    { imageUrl: '/images/45.png',  },
    { imageUrl: '/images/46.png',  },
    { imageUrl: '/images/47.png',  },
    { imageUrl: '/images/48.png',  },
    { imageUrl: '/images/49.png',  },
    { imageUrl: '/images/50.png',  },
    { imageUrl: '/images/51.png',  },
    { imageUrl: '/images/52.png',  },
    { imageUrl: '/images/53.png',  },
    { imageUrl: '/images/54.png',  },
    { imageUrl: '/images/56.png',  },
    { imageUrl: '/images/57.png',  },
    { imageUrl: '/images/58.png',  },
    { imageUrl: '/images/59.png',  },
    { imageUrl: '/images/60.png',  },
    { imageUrl: '/images/61.png',  },
    { imageUrl: '/images/62.png',  },
    { imageUrl: '/images/63.png',  },
    { imageUrl: '/images/64.png',  },
    { imageUrl: '/images/65.png',  },
    { imageUrl: '/images/66.png',  },
    { imageUrl: '/images/67.png',  },
    { imageUrl: '/images/68.png',  },
    { imageUrl: '/images/69.png',  },
    { imageUrl: '/images/70.png',  },
    { imageUrl: '/images/71.png',  },
    { imageUrl: '/images/72.png',  },
    { imageUrl: '/images/73.png',  },
    { imageUrl: '/images/74.png',  },
    { imageUrl: '/images/75.png',  },
    { imageUrl: '/images/76.png',  },
    { imageUrl: '/images/77.png',  },
    { imageUrl: '/images/78.png',  },
    { imageUrl: '/images/79.png',  },
    { imageUrl: '/images/80.png',  },
    { imageUrl: '/images/81.png',  },
    { imageUrl: '/images/82.png',  },
    { imageUrl: '/images/83.png',  },


  ];
  currentSlideIndex = 0;
  constructor() { }

  
  currentSlide = 0;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  isSlideActive(index: number): boolean {
    return this.currentSlide === index;
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 50); 
  }
}