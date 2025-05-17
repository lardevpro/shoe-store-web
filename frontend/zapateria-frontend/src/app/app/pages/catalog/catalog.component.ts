import { Component, OnInit } from '@angular/core';
import { ShoeCardComponent } from '../../components/product-card/product-card.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Product } from '../../../models/product';
import { Connection } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, ShoeCardComponent, RouterLink],
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

  constructor(private connection: Connection) { }
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
