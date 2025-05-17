import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
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
