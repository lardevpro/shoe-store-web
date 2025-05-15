
import { Component, Input } from '@angular/core';
import { Shoe } from '../../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.scss'],
  imports: [CommonModule]
})
export class ShoeCardComponent {
  @Input() shoe!: Shoe;
}
