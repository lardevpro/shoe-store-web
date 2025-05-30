import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NzLayoutModule, RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent],
  template: `
    <nz-layout>
      <!-- navbar -->
      <nz-header>
        <app-header></app-header>
        <app-navbar></app-navbar>
      </nz-header>

       <!-- carousel -->
      <nz-content>
          <router-outlet></router-outlet>
      </nz-content>
      
      <!-- footer -->
      <nz-footer>
        <app-footer></app-footer>
      </nz-footer>
      
    </nz-layout>
  `,
  styles: [
    `
    :host {
        text-align: center;
    }
         
    nz-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: rgb(237, 194, 243);
    }

    nz-header {
      height: 200px; 
      display: flex; 
      justify-content: start;
      align-items: center;  
      background: var(--secondary-color);
      gap: 400px;
    }

   
    nz-content {
      flex: 1; 
      padding: 24px;
      background: var(--secundary-color);
      color: #333;
      min-height: 120px;
    }

    nz-footer {
      background-color:rgb(182, 172, 245);
      color: black;
      text-align: center;
      padding: 24px 50px;
      height: 180px;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }
    

    @media (max-width: 768px) {
      nz-header {
        height: 130px;
        gap: 60px;
      }
    }

    @media (max-width: 480px) {
      nz-header {
        height: 120px;
        gap: 70px;
      }
    }
    `
  ]
})
export class AppComponent {}
