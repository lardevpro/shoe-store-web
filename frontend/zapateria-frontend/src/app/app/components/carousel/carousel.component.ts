import { Component, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NzCarouselModule, NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NzCarouselModule],
  template: `
    <ng-container *ngIf="loaded; else loading">
      <div class="carousel-container">
        <button class="arrow left" (click)="prev()">&lt;</button>
        <nz-carousel #carousel [nzAutoPlay]="true" [nzAutoPlaySpeed]="8000" [nzTransitionSpeed]="2000">
          <div nz-carousel-content *ngFor="let img of images; trackBy: trackByIndex">
            <div class="image-wrapper"><img class="image" [src]="img" /></div>
          </div>
        </nz-carousel>
        <button class="arrow right" (click)="next()">&gt;</button>
      </div>
    </ng-container>
    <ng-template #loading>
      <div>Cargando imágenes...</div>
    </ng-template>
  `,
  styles: [`
    .carousel-container {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
    }
    nz-carousel {
      flex: 1 1 auto;
    }
    .arrow {
      background: rgba(0,0,0,0.3);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 22px;
      cursor: pointer;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
      margin: 0 8px;
    }
    .arrow:hover {
      background: rgba(0,0,0,0.6);
    }
    .left { order: 0; }
    .right { order: 2; }
    nz-carousel { order: 1; }
    [nz-carousel-content] {
      text-align: center;
      height: 220px;
      line-height: 160px;
      background: rgb(218, 193, 248);
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

  prev() {
    this.carousel.pre();
  }
  next() {
    this.carousel.next();
  }
}
