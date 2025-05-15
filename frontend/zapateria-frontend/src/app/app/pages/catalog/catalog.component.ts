import { Component, OnInit } from '@angular/core';
import { ShoeCardComponent } from '../../components/shoe-card/shoe-card.component';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/product';
import { Connection } from '../../services/connection.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ShoeCardComponent, RouterLink, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {
  products: Product[] = [];

  constructor(private connection: Connection) { }

  ngOnInit(): void {
    this.connection.getAllShoes().subscribe({
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
