import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, NzTypographyModule],
  template: `
    <div class="welcome-section">
      <h1 nz-typography nzTitle class="welcome-title">¡Bienvenido a Zapatería Carmen!</h1>
      <p nz-paragraph class="welcome-text">
        Descubre nuestra exclusiva colección de calzado artesanal y complementos de moda. 
        Donde la elegancia se encuentra con la comodidad en cada paso.
      </p>
    </div>
    
    <app-carousel class="centered-carousel"></app-carousel>
  `,
  styles: `
    .welcome-section {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 2rem;
      text-align: center;
      background:transparent;
      border-radius: 18px;
  
    }

    .welcome-title {
      color: #6d3995;
      font-size: 2.5rem;
      margin-bottom: 1rem;
      text-shadow: 0 2px 8px rgba(162, 89, 207, 0.1);
    }

    .welcome-text {
      color: #8b5e3c;
      font-size: 1.2rem;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
    }

    .centered-carousel {
      width: 80%;
      max-width: 1200px;
      margin: 20px auto; 
      padding: 20px 0;
      display: block; 
      text-align: center; 
    }

    @media (max-width: 768px) {
      .welcome-section {
        margin: 1rem;
        padding: 1.5rem;
      }
      
      .welcome-title {
        font-size: 2rem;
      }
      
      .welcome-text {
        font-size: 1rem;
      }
      
      .centered-carousel {
        width: 95%;
      }
    }
  `
})
export class HomeComponent {}
