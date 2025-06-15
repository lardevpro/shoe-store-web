import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-header',
  imports: [NzLayoutModule, NavbarComponent],
  template: `
  <nz-content>
    <img src="images/market/logo.png" alt="Zapatería Logo"/>
    <app-navbar></app-navbar>
  </nz-content>
  `,
  styles: `
        
        nz-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 400px;
          background: var(--primary-color);
          padding: 20px;
          border-radius: var(--border-radius);
          border: var(--border-solid-weidth) solid var(--borde-solid);
        }

        img {
          width: 100%;
          max-width: 200px;
          padding: 5px;
          position: relative;
          border-radius:var(--border-radius);
          border: var(--border-solid-weidth) solid var(--borde-solid);
          margin: 0 auto;
        } 

         @media (max-width: 1280px) {
       
        nz-content {
          gap: 0px;
        }
        img {
          max-width: 180px;
        }
      }

      @media (max-width: 1024px) {
         nz-content {
          gap: 0px;
        }
        img {
          max-width: 150px;
        }
      }

      @media (max-width: 768px) {
        nz-content {
          gap: 80px;
        }
        img {
          max-width: 120px;
        }
      }

      @media (max-width: 480px) {

        
        .dropdown-menu {
          display: block;
        }
        img {
          max-width: 100px;
        }
    }
          `
})
export class HeaderComponent {

}
