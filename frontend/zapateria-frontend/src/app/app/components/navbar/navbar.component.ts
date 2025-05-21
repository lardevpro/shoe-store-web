import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NzButtonModule],
  template: `
    <header class="navbar-header">
      <img src="images/logo.png" alt="Zapatería Logo" (click)="navigateTo('/')" />
      <nav class="navbar-nav">
        <button nz-button nzType="text" (click)="navigateTo('/')">Inicio</button>
        <button nz-button nzType="text" (click)="navigateTo('catalog')">Catálogo</button>
        <button nz-button nzType="text" (click)="navigateTo('about')">Sobre Nosotros</button>
        <button nz-button nzType="text" (click)="navigateTo('contact')">Contacto</button>
      </nav>
    </header>
  `,
  styles: [`
    .navbar-header {
      display: flex;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
    }
    img {
      width: 200px;
      margin-right: 1150px;
      padding: 5px;
      cursor: pointer;
      border-radius: 13px;
      border: 1.5px solid rgb(174, 106, 238);
      background-color: rgb(249, 175, 249);
    }
    .navbar-nav {
      display: flex;
      gap: 20px;
      margin-left: auto; /* Esto empuja el nav al extremo derecho */
      align-items: center;
    }
    button {
      border-radius: 13px;
      background-color: rgb(246, 115, 246);
    }
  `]
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
