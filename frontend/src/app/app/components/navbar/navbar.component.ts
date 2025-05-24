import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-navbar',
  imports: [NzButtonModule],
  template: `
           <header style="display: flex; align-items: center; justify-content: space-between; padding: 0 20px; ">
              <img src="images/logo.png" alt="Zapatería Logo" (click)="navigateTo('/')" />
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
      
      img {
        width: 200px;
        padding: 5px;
        cursor: pointer;
        border-radius: 13px;
        border: 1.5px solidrgb(174, 106, 238);
        background-color:rgb(249, 175, 249); 
        margin-right: 200px;
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
