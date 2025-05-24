import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent  {
  products: Product[] = [];
  mainCategories = [
    { key: 'shoes', label: 'Zapatos' },
    { key: 'bags', label: 'Bolsos' },
    { key: 'accessories', label: 'Accesorios' }
  ];

  constructor() { }
  
}
