import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../../services/shoe.service';
import { Shoe } from '../../../models/shoe';
import { ShoeCardComponent } from '../../components/shoe-card/shoe-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ShoeCardComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {
  shoes: Shoe[] = [];

  constructor(private shoeService: ShoeService) { }

  ngOnInit(): void {
    this.shoeService.getAllShoes().subscribe({
      next: (data: Shoe[]) => {
        this.shoes = data;
      },
      error: (error: any) => {
        console.error('Error loading shoes:', error);
      }
    });
  }
}
