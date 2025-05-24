import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
@Component({
  selector: 'app-navbar',
  imports: [NzButtonModule,NzIconModule, NzMenuModule],
  template: ` 
          <div class="navbar-container">
            <ul nz-menu nzMode="horizontal">
              <li nz-menu-item nzSelected (click)="navigateTo('/')">
                <nz-icon nzType="home" />
                Página Principal
              </li>
                <li nz-submenu nzTitle="Zapatos" nzIcon="appstore">
                <ul>
                    <ul>
                      <li nz-menu-item (click)="navigateTo('shoes')">Hombre</li>
                      <li nz-menu-item>Mujer</li>
                    </ul>          
                </ul>
              </li>
              <li nz-menu-item (click)="navigateTo('bags')">
              <!-- <nz-icon nzType="home" /> -->
                Bolsos
              </li>
              <li nz-menu-item (click)="navigateTo('accessories')">
                <!-- <nz-icon nzType="home" /> -->
                Complementos
              </li>       
            </ul>
          </div>
          
            `,
            
 styles: [
    `  
    .navbar-container {
      background-color:rgb(246, 240, 221);  // Color de fondo
      border-radius: 10px;  // Redondeo de esquinas
      margin-top:30px;
    }

    ul {
      background: transparent;  // Fondo transparente para el menú
    }
    `
  ]
})

export class NavbarComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
