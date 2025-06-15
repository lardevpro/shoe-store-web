import { Component, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NzCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {
  @Input() images: string[] = [];
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
}
