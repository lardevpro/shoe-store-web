import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../components/carousel/carousel.component"; 
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  template: `           
              <app-carousel [images]="images" class="centered-carousel"></app-carousel>           
            `,
  styles: `
  .centered-carousel {
      width: 80%;
      max-width: 1200px;
      margin: 20px auto; 
      padding: 20px 0;
      display: block; 
      text-align: center; 
    }
    app-carousel {
      display: inline-block; 
    }
  `
})
export class HomeComponent {
  images: string[] = []; 
  
  constructor(private carouselService: CarouselService) {
    this.carouselService.getCarouselImages$().subscribe((images: string[]) => {
      this.images = images;
    });
  }
}
