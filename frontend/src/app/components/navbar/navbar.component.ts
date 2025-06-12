// FILEPATH: d:/shoe-store-web/frontend/src/app/components/navbar/navbar.component.ts

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NzButtonModule, NzIconModule, NzMenuModule, NzDropDownModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: ` 
    <div class="navbar-container">
      <ul nz-menu nzMode="horizontal" class="navbar-menu">
       <li nz-menu-item [routerLink]="['/']">
          <span nz-icon nzType="home"></span>
          <span class="nav-text">Página Principal</span>
        </li>
        <li nz-submenu nzTitle="Zapatos" nzIcon="appstore">
          <ul>
            <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ genre: 'hombre',category: 'zapatos' }">Hombre</li>
            <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ genre: 'mujer',category: 'zapatos' }">Mujer</li>
          </ul>
        </li>
        <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ category: 'bolsos' }">
          <span class="nav-text">Bolsos</span>
        </li>
        <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ category: 'complementos' }">
          <span class="nav-text">Complementos</span>
        </li>       
        <li nz-menu-item [routerLink]="['/about']">
          <span class="nav-text">Sobre Nosotros</span>
        </li>  
      </ul>
      <div class="dropdown-container">
        <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
          <nz-icon nzType="menu" nzTheme="outline"></nz-icon>
        </a>
        <nz-dropdown-menu #menu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item [routerLink]="['/']">Inicio</li>
            <li nz-submenu nzTitle="Zapatos">
              <ul>
                <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ genre: 'hombre', category: 'zapatos' }">Hombre</li> 
                <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ genre: 'mujer', category: 'zapatos' }">Mujer</li>  
                <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ category: 'bolsos' }">Bolsos</li>
                <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ category: 'complementos' }">Accesorios</li>        
              </ul>
            </li>
            <li nz-menu-item [routerLink]="['/about']">Sobre Nosotros</li>
          </ul>
        </nz-dropdown-menu>
      </div>
    </div>
  `,
  styles: [`
    .navbar-container {
      background-color: var(--primary-color);
      border-radius: var(--border-radius);
      margin-top: 30px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }

    .navbar-menu {
      background: transparent;
      display: flex;
    }

    .dropdown-container {
      display: none;
    }

    ul {
      background: transparent;
    }

    .dropdown-menu {
      background: var(--primary-color);
    }

    @media (max-width: 768px) {
      .navbar-menu {
        display: none;
      }

      .dropdown-container {
        display: block;
      }

      .dropdown-container a {
        font-size: 24px;
        color: #fff;
      }

      :host ::ng-deep .ant-dropdown-menu {
        background-color: var(--primary-color);
      }

      :host ::ng-deep .ant-dropdown-menu-item,
      :host ::ng-deep .ant-dropdown-menu-submenu-title {
        color: #fff;
      }
    }
  `]
})
export class NavbarComponent {
  constructor() {}
}