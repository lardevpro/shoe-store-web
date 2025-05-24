
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/shoe';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule]
})
export class ShoeCardComponent {
  @Input() product!: Product;
}
