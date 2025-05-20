import { Component, AfterViewInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { forkJoin, from, Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NzCarouselModule],
  template: `
    @if (loaded) {
      <nz-carousel [nzAutoPlay]="true" [nzAutoPlaySpeed]="5000" [nzTransitionSpeed]="1000">
        @for (img of images; track $index) {
          <div nz-carousel-content>
            <div class="image-wrapper"><img class="image" [src]="img" /></div>
          </div>
        }
      </nz-carousel>
    } @else {
      <div>Cargando imágenes...</div>
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
export class CarouselComponent implements AfterViewInit { // ❗❗ hay que dar unas dimensiones adecuadas a las imagenes o dará WARNIG en el navegador
   images = ['images/imagesStore/fachada1.webp',          // ❗❗ debe andar más o menos 400px (ancho) x 200px (alto) 
             'images/imagesStore/fachada2.webp',
             'images/imagesStore/fachada3.webp'];
  loaded = false;

  ngAfterViewInit(): void {
  if (typeof window !== 'undefined') {
    this.preloadImages(this.images).subscribe(() => {
      this.loaded = true;
    });
  } else {
    // Si estás en SSR, opcionalmente marca como cargado directamente
    this.loaded = true;
  }
}

  preloadImages(urls: string[]): Observable<void[]> {
    const imageLoaders = urls.map(url => from(new Promise<void>(res => {
      const img = new Image();
      img.onload = img.onerror = () => res();
      img.src = url;
    })));
    return forkJoin(imageLoaders);
  }
}
