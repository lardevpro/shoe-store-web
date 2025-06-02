import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private carouselImages: string[] = [
    'images/market/logo.png',
    'images/market/cartel-entrada.webp',
    'images/market/fachada-derch-perfil.webp',
    'images/market/fachada-derecha-frente.webp',
    'images/market/fachada-principal-gente-paseando.webp',
    'images/market/fachada-principal.webp',
    'images/market/tienda-dentro-expositor-principal.webp'
  ];

   getCarouselImages$(): Observable<string[]> {
    return of(this.carouselImages);
  }
}