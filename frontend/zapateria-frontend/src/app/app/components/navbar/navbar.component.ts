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
      margin-right: 1000px;
      padding: 5px;
      cursor: pointer;
      border-radius: 13px;
      border: 1.5px solid rgb(174, 106, 238);
      background-color: rgb(249, 175, 249);
    }
    .navbar-nav {
      display: flex;
      gap: 20px;
      margin-left: auto; 
      align-items: center;
    }
    button {
      border-radius: 13px;
      background-color: rgb(246, 115, 246);
    }

    button {
    border-radius: 14px;
    background-color: rgb(246, 115, 246);
    font-size: 18px;     /* tamaño del texto */
    padding: 10px 15px;  /* alto y ancho interno del botón */
    margin-top: 2px;
    margin-bottom: 2px
  }

  button {
  display: flex;
  align-items: center;      
  justify-content: center;  
  border-radius: 14px;
  background-color: rgb(246, 115, 246);
  font-size: 17px;          
  padding: 12px 28px;      
  margin: 4px 0;            
  min-width: 100px;         
  min-height: 44px;        
  border: none;             
  box-sizing: border-box;   
  cursor: pointer;          
  transition: background 0.2s;
}


  `]
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
