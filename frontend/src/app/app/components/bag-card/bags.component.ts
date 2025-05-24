import { Component } from '@angular/core';
import { Product } from '../../models/shoe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent {
  bags: Product[] = [];
    

  constructor() {}
}
