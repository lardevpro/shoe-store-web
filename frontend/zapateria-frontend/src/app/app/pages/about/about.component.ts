import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';ng serve --port 4300


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NzCardModule, NzTypographyModule, NzImageModule],
  template: `
    <nz-card class="about-card" nzBordered="false">
      <h1 nz-typography nzTitle>Sobre Nosotros</h1>
      <div class="about-image-wrapper">
        <img nz-image nzSrc="images/carmen.jpeg" nzAlt="Zapatería Logo" class="logo-img" width="220" />
        <div class="about-text">
          <p nz-paragraph>
            Somos Calzados Carmen, una tienda dedicada a ofrecer los mejores zapatos y complementos.
            Nuestra misión es brindar calidad y estilo a cada paso!!
          </p>
          <p nz-paragraph>
            Visítanos en nuestra tienda física en Manzanares o compra online!
          </p>
        </div>
      </div>
    </nz-card>
  `,
  styles: [`
    .about-card {
      max-width: 800px;
      margin: 2rem auto;
      border-radius: 16px;
      background: linear-gradient(90deg, rgba(162, 89, 207, 0.08) 60%, rgba(185, 122, 86, 0.07) 100%);
      box-shadow: 0 4px 20px rgba(162, 89, 207, 0.09), 0 2px 8px rgba(185, 122, 86, 0.07);
      padding: 2.5rem 1rem 2rem 1rem;
    }
    h1[nzTitle] {
      color: #8b5e3c;
      margin-bottom: 1rem;
      letter-spacing: 1.2px;
      text-shadow: 0 2px 8px rgba(162, 89, 207, 0.10);
      text-align: center;
    }
    .about-image-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem 1rem;
      background: rgba(162, 89, 207, 0.04);
      border-radius: 14px;
      box-shadow: 0 2px 8px rgba(162, 89, 207, 0.07);
      max-width: 380px;
      margin: 0 auto;
    }
    .logo-img {
      border-radius: 10px;
      height: 180px;
      margin-bottom: 1.2rem;
      box-shadow: 0 2px 8px rgba(162, 89, 207, 0.10);
      display: block;
      object-fit: cover;
    }
    .about-text {
      width: 100%;
    }
    p[nz-paragraph] {
      color: #6d3995;
      font-size: 1.15rem;
      margin-bottom: 1.2rem;
      line-height: 1.7;
      text-align: center;
    }
    @media (max-width: 600px) {
      .about-card {
        padding: 1.2rem 0.3rem;
        border-radius: 10px;
      }
      .about-image-wrapper {
        padding: 1rem 0.3rem;
        max-width: 100%;
      }
      .logo-img {
        height: 120px;
      }
    }
  `]
})
export class AboutComponent {}
