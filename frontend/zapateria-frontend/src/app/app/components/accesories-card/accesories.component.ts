import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.scss']
})
export class AccessoriesComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getProductsByCategory('complementos')
      .subscribe({
        next: (products) => this.products = products,
        error: (error) => console.error('Error:', error)
      });
  }
}
