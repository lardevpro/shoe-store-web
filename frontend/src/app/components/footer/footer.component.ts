import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: ` 
    <div class="container">  
      <div style="margin-bottom: 8px;">
        <a href="#" style="color: white; margin: 0 12px;">Política de privacidad</a> |
        <a href="#" style="color: white; margin: 0 12px;">Términos</a> |
        <a href="/contact" style="color: white; margin: 0 12px;">Contacto</a>
      </div>
      <div class="social-icons">
        <a href="https://www.instagram.com/p/DGz9VwptIIi/" target="_blank" rel="noopener noreferrer" class="social-icon">
          <img src="icons/instagram_icon.svg" alt="Instagram" class="icon">
        </a>
        <a href="https://wa.me/tu_numero_de_whatsapp" target="_blank" rel="noopener noreferrer" class="social-icon">
          <img src="icons/whatsapp_icon.svg" alt="WhatsApp" class="icon">
        </a>
        <a href="https://maps.app.goo.gl/o327Czjhv5eSiDMW7" target="_blank" rel="noopener noreferrer" class="social-icon">
          <img src="icons/maps_icon.svg" alt="Ubicación" class="icon">
        </a>
        <a href="https://www.facebook.com/calzadoscarmenmaria/?locale=es_ES" target="_blank" rel="noopener noreferrer" class="social-icon">
          <img src="icons/facebook_icon.svg" alt="Ubicación" class="icon">
        </a>
      </div>
      © 2025 Zapatería.
    </div>
  `,
  styles: [
    ` 
    .container {
      line-height: 1.5rem;
      
    }
    .social-icons {
      padding: 20px;
      display: flex;
      justify-content: center;
      gap: 50px;
    }

    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--tertiary-color);
      color: white;
      text-decoration: none;
      transition: background-color 0.3s, transform 0.3s;
    }

    .social-icon:hover {
      background-color: var(--fourth-color);
      transform: scale(1.1);
    }

    .icon {
      width: 30px;
      height: 30px;
    }

    @media (max-width: 768px) {
        .icon {
        width: 19px;
        height: 19px;
      }
      .social-icon {
      width: 20px;
      height: 20px; 
    }

    }
    `
  ]
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}