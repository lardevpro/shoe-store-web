import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NzCarouselModule],
  
  template: `
    <ng-container *ngIf="loaded; else loading">
      <nz-carousel [nzAutoPlay]="true" [nzAutoPlaySpeed]="8000" [nzTransitionSpeed]="2000">
        <div nz-carousel-content *ngFor="let img of images; trackBy: trackByIndex">
          <div class="image-wrapper"><img class="image" [src]="img" /></div>
        </div>
      </nz-carousel>
    </ng-container>
    <ng-template #loading>
      <div>Cargando imágenes...</div>
    </ng-template>
  `,
  
  styles: [`
   [nz-carousel-content] {
        text-align: center;
        height: 220px;
        line-height: 160px;
        background:rgb(218, 193, 248);
        color: #fff;
        overflow: hidden;
      
      }

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      height: 100%;
      width: 100%;
    }
    .image-wrapper img {
      max-height: 100%;
      border-radius: 10px;
    }
  `]
})
export class CarouselComponent implements AfterViewInit {
  images = ['images/imagesStore/fachada1.webp',
            'images/imagesStore/fachada2.webp',
            'images/imagesStore/fachada3.webp',
            'images/imagesStore/fachada4.webp',
            'images/imagesStore/fachada9.webp',
            'images/imagesStore/fachada10.webp',
            'images/imagesStore/fachada11.webp',];
  loaded = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.preloadImages(this.images, () => {
        this.loaded = true;
        this.cdr.detectChanges(); // Forzar la detección de cambios
      });
    } else {
      // Si estás en SSR, opcionalmente marca como cargado directamente
      this.loaded = true;
      this.cdr.detectChanges(); // Forzar la detección de cambios
    }
  }

  preloadImages(urls: string[], callback: () => void): void {
    let loadedCount = 0;
    const totalImages = urls.length;

    urls.forEach(url => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          callback();
        }
      };
      img.src = url;
    });
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
