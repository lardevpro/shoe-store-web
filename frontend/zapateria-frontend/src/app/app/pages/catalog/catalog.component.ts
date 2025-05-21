import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzImageModule } from 'ng-zorro-antd/image';


@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
      CommonModule,
      RouterModule,
      NzCardModule,
      NzTypographyModule,
      NzImageModule,
      NzButtonModule,
      NzGridModule
  ],
  template: `
    <nz-card class="catalog-card">
      <h1 nz-typography nzTitle>Catálogo de Productos</h1>
      
      <img
        src="images/imagesStore/fachada1.webp"
        alt="Tienda"
        class="store-banner"
      />

      <nav class="category-menu">
        <a 
          *ngFor="let category of mainCategories"
          nz-button 
          nzType="primary"
          class="btn-category"
          [routerLink]="['/catalog', category.key]"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          {{ category.label }}
        </a>
      </nav>

      <router-outlet></router-outlet>
    </nz-card>
  `,
  styles: [`
    .catalog-card {
      padding: 2.5rem 1rem 2rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
      background: linear-gradient(90deg, rgba(162, 89, 207, 0.07) 60%, rgba(185, 122, 86, 0.06) 100%);
      border-radius: 18px;
      box-shadow: 0 4px 20px rgba(162, 89, 207, 0.07), 0 2px 8px rgba(185, 122, 86, 0.05);
      
      h1[nzTitle] {
        color: #8b5e3c;
        font-size: 2.2rem;
        margin-bottom: 2.2rem;
        letter-spacing: 1.5px;
        text-shadow: 0 2px 8px rgba(162, 89, 207, 0.08);
        text-align: center;
      }
    }

    .store-banner {
      max-width: 420px;
      width: 100%;
      height: auto;
      border-radius: 18px;
      box-shadow: 0 8px 30px rgba(162, 89, 207, 0.10), 0 2px 8px rgba(185, 122, 86, 0.10);
      margin: 0 auto 2.5rem;
      display: block;
      box-shadow: none !important; /* elimina sombra */
      border: none !important;     /* elimina borde */
    
    }

    .category-menu {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      margin-bottom: 2.5rem;

      .btn-category {
        background: linear-gradient(90deg, #a259cf 0%, #b97a56 100%);
        border: none;
        border-radius: 30px;
        box-shadow: 0 2px 8px rgba(162, 89, 207, 0.13);
        transition: all 0.3s;

        &:hover,
        &.active {
          background: linear-gradient(90deg, #6d3995 0%, #8b5e3c 100%);
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 6px 24px rgba(162, 89, 207, 0.18);
        }
      }
    }

    @media (max-width: 900px) {
      .catalog-card {
        padding: 1.5rem 0.5rem;
      }
    }

    @media (max-width: 600px) {
      .catalog-card {
        padding: 1rem 0.2rem;
        border-radius: 10px;
    
        
        .category-menu {
          flex-direction: column;
          align-items: center;
        }
      }
    }
  `]
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  mainCategories = [
    { key: 'shoes', label: 'Zapatos' },
    { key: 'bags', label: 'Bolsos' },
    { key: 'accessories', label: 'Accesorios' }
  ];

  constructor(private connection: ProductService) { }

  ngOnInit(): void {
    this.connection.getProductsByCategory('shoes').subscribe({
      next: (data: Product[]) => {
        this.products = data;
        console.log(this.products); 
      },
      error: (error: any) => {
        console.error('Error loading shoes:', error); 
      }
    });
  }
}
