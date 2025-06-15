import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FooterService } from './services/footer.service';
import { FooterModel } from './models/footer';

@Component({
  selector: 'app-root',
  imports: [NzLayoutModule, 
            RouterOutlet, 
            HeaderComponent, 
            FooterComponent],
  template: `
    <nz-layout>
      <!-- header -->
      <nz-header>
        <app-header></app-header>
      </nz-header>

       <!-- carousel -->
      <nz-content>
          <router-outlet></router-outlet>
      </nz-content>
      
      <!-- footer -->
      <nz-footer>
        <app-footer [footerModel]="footerModel"></app-footer>
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
      background: var(--body-color);
    }

    nz-header {
      height: 180px;
      width: auto; 
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
      background-color:var(--footer-color);
      padding: 24px 50px;
      height: 230px;
    }
    

    @media (max-width: var(--max-width-tablets)) {
      nz-header {
        height: 130px;
        gap: 60px;
      }
    }

    @media (max-width: var(--max-width-smartphones)) {
      nz-header {
        height: 120px;
        gap: 70px;
      }
    }
    `
  ]
})
export class AppComponent implements OnInit {
  footerModel!: FooterModel;
  constructor(private footerService: FooterService) {}

  ngOnInit(){
     this.footerService.getInfoFooter$().subscribe((footer: FooterModel) => {
      this.footerModel = footer;
    });
  }
}
