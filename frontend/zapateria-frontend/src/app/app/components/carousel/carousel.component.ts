import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NzCarouselModule],
  template: `
    <ng-container *ngIf="loaded; else loading">
      <nz-carousel [nzAutoPlay]="true" [nzAutoPlaySpeed]="5000" [nzTransitionSpeed]="1000">
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
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(223, 175, 248);
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
  images = ['images/imagesStore/fachada1.webp', 'images/imagesStore/fachada2.webp', 'images/imagesStore/fachada3.webp'];
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
