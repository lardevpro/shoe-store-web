import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NavbarComponent } from "../navbar/navbar.component";
import { NzDemoAutoCompleteStatusComponent } from "../search-bar/search-bar.component";
@Component({
  selector: 'app-header',
  imports: [NzLayoutModule, NavbarComponent, NzDemoAutoCompleteStatusComponent],
  template: `
  <nz-content>
    <img src="images/market/logo.png" alt="Zapatería Logo"/>
    <app-navbar></app-navbar>
    <app-search-bar></app-search-bar>
  </nz-content>
  `,
  styles: `
        
      nz-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90vw; 
        background: var(--header-color);
        padding: 10px;
        border-radius: var(--border-radius);
        border: var(--border-solid-weidth) solid var(--footer-color);
        box-sizing: border-box;   
      }

      img {
          width: 100%;
          max-width: 200px;
          padding: 5px;
          position: relative;
          border-radius:var(--border-radius);
          border: var(--border-solid-weidth) solid var(--footer-color);
          margin-left: 0;
      } 
        app-search-bar {
          margin-right: 30px;
        }
      @media (max-width: 1280px) {
        app-search-bar{
          display: none;
        } 
        img {
          max-width: 180px;
        }
      }

      @media (max-width: 1024px) {
        nz-content{
           width: 80vw;
        }
        
        img {
          max-width: 150px;
        }
      }

      @media (max-width: 768px) {
        img {
          max-width: 120px;
          margin-left: 0px;
        }
      }

      @media (max-width: 480px) {
        img {
          max-width: 100px;
           margin-left: 0px;
        }
    }
          `
})
export class HeaderComponent {
}
