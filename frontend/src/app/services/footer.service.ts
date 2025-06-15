import { Injectable } from '@angular/core';
import { FooterModel } from '../models/footer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
 private footerModel: FooterModel;

constructor() {

  this.footerModel = { 
    
    linksPagesAppModel: [
        { text: 'Políticas', href: '#' },
        { text: 'Términos', href: '#' },
        { text: 'Contacto', href: '/contact' }
      ],
    
    socialIcons:  [
      {
        href: 'https://wa.me/tu_numero_de_whatsapp',
        message: 'Ir a nuestro WhatsApp',
        img: 'icons/whatsapp_icon.svg',
        alt: 'WhatsApp',
      },
      {
        href: 'https://maps.app.goo.gl/o327Czjhv5eSiDMW7',
        message: 'Conoce nuestra ubicación',
        img: 'icons/maps_icon.svg',
        alt: 'Ubicación',
      },
      {
        href: 'https://www.facebook.com/calzadoscarmenmaria/?locale=es_ES',
        message: 'Ir a nuestro Facebook',
        img: 'icons/facebook_icon.svg',
        alt: 'Facebook',
      },
      {
        href: 'https://www.instagram.com/carmenmaria_diaz/reels/',
        message: 'Ir a nuestro Instagram',
        img: 'icons/instagram_icon.svg',
        alt: 'Facebook',
      },
    ],
    copyright: '© '+ new Date().getFullYear() + ' Carmen María Calzados y Complementos'
    };
  }

  getInfoFooter$(): Observable<FooterModel> {
    return of(this.footerModel);
  }
}
