import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { Connection } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent {
  products: Product[] = [];

  constructor(private connection: Connection) {}

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.connection.getProductsByCategory('bolsos')
      .subscribe({
        next: (products) => this.products = products,
        error: (error) => console.error('Error:', error)
      });
  }
}
