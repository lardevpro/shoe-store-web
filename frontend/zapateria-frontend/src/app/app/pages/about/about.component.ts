import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NzCardModule, NzTypographyModule, NzImageModule],
  template: `
    <nz-card 
      class="about-card" 
      nzBordered="false"
      [nzBodyStyle]="{ background: '#dac1f8', padding: '2rem 2rem 2rem 2rem' }"
    >
      <h1 nz-typography nzTitle>Sobre Nosotros</h1>
      <img 
        nz-image 
        nzSrc="images/carmen.jpeg" 
        nzAlt="Zapatería Logo" 
        class="logo-img"
      />
      <p nz-paragraph>
        Somos Calzados Carmen, una tienda dedicada a ofrecer los mejores zapatos y complementos.
        Nuestra misión es brindar calidad y estilo a cada paso!!
      </p>
      <p nz-paragraph>
        Visítanos en nuestra tienda física en Manzanares o compra online!
      </p>
    </nz-card>
  `,
  styles: [`
    .about-card {
      max-width: 650px;
      margin: 3rem auto 0 auto;
      border-radius: 18px;
      background: #dac1f8 !important;
      box-shadow: 0 4px 20px rgba(162, 89, 207, 0.09), 0 2px 8px rgba(185, 122, 86, 0.07);
      text-align: center;
      border: none !important; /* Sin línea de borde */
      border-radius: 18px
    }
    .logo-img,
    .ant-image-img {
      display: block;
      margin: 0 auto 1.5rem auto;
      border-radius: 16px;
      width: 100%;
      max-width: 350px;
      max-height: 350px;
      height: auto;
      object-fit: contain;
      background: #dac1f8 !important;
      border: none !important;       /* Sin línea de borde */
      box-shadow: none !important;
      padding: 0 !important;
      border-radius: 16px;
     
    }
    p[nz-paragraph] {
      color: #6d3995;
      font-size: 1.15rem;
      margin-bottom: 1.2rem;
      line-height: 1.7;
      text-align: center;
    }
    h1[nzTitle] {
      color: #8b5e3c;
      margin-bottom: 1.4rem;
      letter-spacing: 1.2px;
      text-shadow: 0 2px 8px rgba(162, 89, 207, 0.10);
      font-weight: 700;
    }
    .ant-image-img {
      background: #dac1f8 !important;
      border-radius: 16px !important;
      border: none !important; /* Sin línea de borde */
    }
    @media (max-width: 700px) {
      .about-card {
        padding: 1.2rem 0.3rem;
        border-radius: 10px;
        max-width: 98vw;
      }
      .logo-img {
        max-width: 98vw;
        max-height: 180px;
        border-radius: 12px;
      }
    }
  `]
})
export class AboutComponent {}
