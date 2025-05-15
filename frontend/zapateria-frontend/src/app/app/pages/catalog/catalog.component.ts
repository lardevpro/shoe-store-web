import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../../services/shoe.service';
import { ShoeCardComponent } from '../../components/shoe-card/shoe-card.component';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ShoeCardComponent, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {
  shoes: Product[] = [];

  constructor(private shoeService: ShoeService) { }

  ngOnInit(): void {
    this.shoeService.getAllShoes().subscribe({
      next: (data: Product[]) => {
        this.shoes = data;
        console.log(data);
      },
      error: (error: any) => {
        console.error('Error loading shoes:', error);
      }
    });
  }
}
