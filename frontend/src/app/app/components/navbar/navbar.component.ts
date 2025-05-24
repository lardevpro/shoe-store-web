import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-navbar',
  imports: [NzButtonModule],
  template: `
           <header style="display: flex; align-items: center; justify-content: space-between; padding: 0 20px; ">
                <nav style="flex: 1; display: flex; justify-content: center; gap: 20px;">
                  <button nz-button nzType="text" (click)="navigateTo('/')">Inicio</button>
                  <button nz-button nzType="text" (click)="navigateTo('shoes')">Zapatos</button>
                  <button nz-button nzType="text" (click)="navigateTo('bags')">Bolsos</button>
                  <button nz-button nzType="text" (click)="navigateTo('accessories')">Accesorios</button>
                </nav>
          </header>
            `,
            
 styles: [
    `  
      button {
        border-radius: 13px;
        background-color: rgb(246, 115, 246);
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
