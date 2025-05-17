import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { Connection } from '../../services/connection.service';
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

  constructor(private connection: Connection) {}

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.connection.getProductsByCategory('accessories')
      .subscribe({
        next: (products) => this.products = products,
        error: (error) => console.error('Error:', error)
      });
  }
}
