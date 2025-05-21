import { Component, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NzCarouselModule, NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NzCarouselModule],
  template: `
    <ng-container *ngIf="loaded; else loading">
      <nz-carousel #carousel [nzAutoPlay]="true" [nzAutoPlaySpeed]="8000" [nzTransitionSpeed]="2000">
        <div nz-carousel-content *ngFor="let img of images; let i = index; trackBy: trackByIndex">
          <div class="image-wrapper">
            <button class="arrow left" (click)="prev($event)">&lt;</button>
            <img 
              class="image" 
              [src]="img" 
              [class.enlarged]="enlargedIndex === i"
              (click)="enlarge(i, $event)"
            />
            <button class="arrow right" (click)="next($event)">&gt;</button>
          </div>
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
      background: rgb(218, 193, 248);
      color: #fff;
      position: relative;
      overflow: visible; /* Permite que la imagen sobresalga suavemente */
    }
    .image-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      height: 100%;
      width: 100%;
      overflow: visible; /* Permite que la imagen sobresalga */
      z-index: 1;
      border-radius: 18px
    }
    .image-wrapper img {
      max-height: 100%;
      border-radius: 10px;
      z-index: 1;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      position: relative;
    }
    .image-wrapper img.enlarged {
      transform: scale(1.05);
      margin: -5px; /* Margen negativo para sobresalir suavemente */
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      position: relative;
      z-index: 10;
    }
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,0.3);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 22px;
      cursor: pointer;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
      opacity: 0.85;
    }
    .arrow:hover {
      background: rgba(0,0,0,0.6);
      opacity: 1;
    }
    .arrow.left {
      left: 40px;
    }
    .arrow.right {
      right: 40px;
    }

  `]
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: NzCarouselComponent;

  images = [
    'images/imagesStore/fachada1.webp',
    'images/imagesStore/fachada2.webp',
    'images/imagesStore/fachada3.webp',
    'images/imagesStore/fachada4.webp',
    'images/imagesStore/fachada9.webp',
    'images/imagesStore/fachada10.webp',
    'images/imagesStore/fachada11.webp',
  ];
  loaded = false;
  enlargedIndex: number | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.preloadImages(this.images, () => {
        this.loaded = true;
        this.cdr.detectChanges();
      });
    } else {
      this.loaded = true;
      this.cdr.detectChanges();
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

  prev(event: Event) {
    event.stopPropagation();
    this.carousel.pre();
  }
  next(event: Event) {
    event.stopPropagation();
    this.carousel.next();
  }

  enlarge(index: number, event: Event) {
    event.stopPropagation();
    this.enlargedIndex = this.enlargedIndex === index ? null : index;
  }
}
