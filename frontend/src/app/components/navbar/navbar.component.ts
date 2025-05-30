import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NzButtonModule, NzIconModule, NzMenuModule, NzDropDownModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: ` 
    <div class="navbar-container">
      <ul nz-menu nzMode="horizontal" class="navbar-menu">
        <li nz-menu-item routerLink="/">
          <span nz-icon nzType="home"></span>
          <span class="nav-text">Página Principal</span>
        </li>
        <li nz-submenu nzTitle="Zapatos" nzIcon="appstore">
          <ul>
            <li nz-menu-item routerLink="/shoes">Hombre</li>
            <li nz-menu-item>Mujer</li>
          </ul>
        </li>
        <li nz-menu-item routerLink="/bags">
          <span class="nav-text">Bolsos</span>
        </li>
        <li nz-menu-item routerLink="/accessories">
          <span class="nav-text">Complementos</span>
        </li>       
        <li nz-menu-item routerLink="/about">
          <span class="nav-text">Sobre Nosotros</span>
        </li>       
      </ul>
      <div class="dropdow">
        <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
          <nz-icon nzType="unordered-list" nzTheme="outline" />
        </a>
          <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul nz-menu>
              <li nz-menu-item routerLink="/">Inicio</li>
              <li nz-submenu nzTitle="Zapatos">
                <ul>
                  <li nz-menu-item routerLink="/shoes">Hombre</li> <!-- componente padre zapatos hombre -->
                  <li nz-menu-item routerLink="/shoes">Mujer</li>  <!-- componente padre zapatos mujer -->
                </ul>
              </li>  
              <li nz-menu-item routerLink="/shoes" routerLinkActive="router-link-active" >Bolsos</li>
              <li nz-menu-item routerLink="/accessories">Accesorios</li>        
            </ul>
          </nz-dropdown-menu>
        </div>
      </div>
  `,
  styles: [
    `  

    .dropdow {
      display: none; 
    }

    .navbar-container {
      background-color: var(--primary-color);  
      border-radius: var(--border-radius); 
      margin-top:30px;
      position: relative; 
    }

    ul {
      background: transparent;  
    }

    .dropdown-menu {
      background:  var(--primary-color); 
    }

    

    @media (max-width: 768px) {
     
      
      .navbar-menu {     
        display: none;  
      }

      .dropdow {
        display: block;
        margin-bottom: 30px;
        border-radius: var(--border-radius);
        font-size: 40px; 
      }    
    }

    `
  ]
})
export class NavbarComponent {

  constructor() {}

  
}