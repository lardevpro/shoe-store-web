import { Component, AfterViewInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NzCarouselModule],
  template: `
    @if (allImagesLoaded) {
      <nz-carousel
        [nzAutoPlay]="true"
        [nzAutoPlaySpeed]="5000"
        [nzTransitionSpeed]="1000"
        (nzAfterChange)="onSlideChange($event)"
      >
        @for (img of images; track $index) {
          <div nz-carousel-content>

            <div class="image-wrapper">
              <img class="image" [src]="img" alt="Imagen carrusel"/>
            </div>
            
          </div>
        }
      </nz-carousel>
    } @else {
      <div class="loading-spinner">Cargando imágenes...</div>
    }
  `,
  styles: [`
    [nz-carousel-content] {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color:rgb(223, 175, 248);
      height: 260px;
      overflow: hidden;
      border-radius: 13px;
    }
    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
       
    }
    .image-wrapper img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      display: block;
      padding: 30px;
    }

    .image { 
       border-radius: 13px;
    }
    
  `]
})
export class CarouselComponent implements AfterViewInit {
  images = [
    'images/imagesStore/fachada1.webp',
    'images/imagesStore/fachada2.webp',
    'images/imagesStore/fachada2.webp'
  ];

  allImagesLoaded = false;

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.preloadImages(this.images).then(() => {
        this.allImagesLoaded = true;
      });
    }
  }

  preloadImages(urls: string[]): Promise<void[]> {
    const promises = urls.map(url => new Promise<void>((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => resolve();
    }));
    return Promise.all(promises);
  }

  onSlideChange(index: number): void {
    // Opcional
  }
}
