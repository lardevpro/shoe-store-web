import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <div style="margin-bottom: 8px;">
      © 2025 Zapatería. Todos los derechos reservados.
    </div>
    <div style="margin-bottom: 8px;">
      <a href="#" style="color: white; margin: 0 12px;">Política de privacidad</a> |
      <a href="#" style="color: white; margin: 0 12px;">Términos de uso</a> |
      <a href="#" style="color: white; margin: 0 12px;">Contacto</a>
    </div>
    <div class="social-icons">
      <a href="https://www.instagram.com/tu_perfil_de_instagram" target="_blank" rel="noopener noreferrer" class="social-icon">
        <img src="icons/instagram_icon.svg" alt="Instagram" class="icon">
      </a>
      <a href="mailto:example@example.com" class="social-icon">
        <img src="icons/mail_icon.svg" alt="Email" class="icon">
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
  `,
  styles: [
    `
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 12px;
    }

    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgb(234, 216, 234);
      color: white;
      text-decoration: none;
      transition: background-color 0.3s, transform 0.3s;
    }

    .social-icon:hover {
      background-color: rgb(171, 187, 255);
      transform: scale(1.1);
    }

    .icon {
      width: 24px;
      height: 24px;
    }

    nz-footer {
      background-color: rgb(151, 139, 233);
      color: white;
      text-align: center;
      padding: 24px 50px;
      height: 116px;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }

    nz-footer a {
      color: white;
      margin: 0 8px;
      text-decoration: none;
    }

    nz-footer a:hover {
      text-decoration: underline;
    }
    `
  ]
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}