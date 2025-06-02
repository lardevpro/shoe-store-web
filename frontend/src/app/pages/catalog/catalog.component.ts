import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-catalog',
  imports: [FormsModule, 
            NzGridModule, 
            NzSliderModule, 
            ProductCardComponent],
  template: `
    <div class="image-container">
      @for (product of products; track $index) {
        <app-product-card [product]="product"></app-product-card>
      }
    </div>
  `,
  styles: [
    `
      .image-container {
        display: flex;
        flex-wrap: wrap; 
        gap: 32px;
      }
    `
  ]
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  genre?: string;
  category?: string;

  constructor(private productService: ProductService,
              private route: ActivatedRoute
              ) {}
    

  ngOnInit(): void {


    

    this.route.queryParams.subscribe(params => {

      const queryParams: { [key: string]: string } = {
        ...(params['genre'] && { gender: params['genre'] }),
        ...(params['category'] && { category: params['category'] })
      };

      this.productService.getProducts$<Product>(queryParams)
        .subscribe((products: Product[]) => {
          this.products = products;
          console.log(products);
        });
    });
    
  }
}

