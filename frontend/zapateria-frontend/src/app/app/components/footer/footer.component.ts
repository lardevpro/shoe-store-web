import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-footer',
  imports: [NzButtonModule, NzIconModule],
  template: `
     <div style="margin-bottom: 8px;">
          © 2025 Zapatería. Todos los derechos reservados.
        </div>
          <div style="margin-bottom: 8px;">
            <a href="#" style="color: white; margin: 0 12px;">Política de privacidad</a> |
            <a href="#" style="color: white; margin: 0 12px;">Términos de uso</a> |
            <a href="#" style="color: white; margin: 0 12px;">Contacto</a>
          </div>
       
          <!-- Aquí iconos sociales con ng-zorro -->
        <div>
          <button nz-button nzType="primary" nzShape="circle">
            <nz-icon nzType="mail" nzTheme="outline"></nz-icon>
          </button>
          <button nz-button nzType="primary" nzShape="circle">
            <nz-icon nzType="instagram" nzTheme="outline"></nz-icon>
          </button>
          <button nz-button nzType="primary" nzShape="circle">
            <nz-icon nzType="whats-app" nzTheme="outline" />
          </button>
        </div>
  `,
   styles: [
    `
    button {
      border-radius: 13px;
      background-color: rgb(246, 115, 246);
      margin: 0 6px;
    }

    button:active {
      text-decoration: underline;
    }
         
    nz-footer {
      background-color:rgb(151, 139, 233);
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

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 12px;
    }

    `
  ]
})



export class FooterComponent {
 year: number = new Date().getFullYear();
}
