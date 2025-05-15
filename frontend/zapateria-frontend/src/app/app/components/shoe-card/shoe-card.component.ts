
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.scss'],
  imports: [CommonModule]
})
export class ShoeCardComponent {
  @Input() product!: Product;
}
