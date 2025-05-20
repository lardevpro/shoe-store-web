import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FooterComponent } from "./app/components/footer/footer.component";
import { NavbarComponent } from "./app/components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [NzLayoutModule, FooterComponent, NavbarComponent, RouterOutlet],
  template: `
    <nz-layout>
      <!-- navbar -->
      <nz-header>
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
      height: 120px; 
      display: flex; 
      align-items: center; 
      padding: 0 24px;
      background: rgb(238, 206, 254);
      gap: 24px;
    }

   
    nz-content {
      flex: 1; 
      padding: 24px;
      background: rgb(237, 194, 243);
      color: #333;
      min-height: 120px;
    }

    nz-footer {
      background-color:rgb(182, 172, 245);
      color: black;
      text-align: center;
      padding: 24px 50px;
      height: 116px;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }

    `
  ]
})
export class AppComponent {}
