
import { Component, Input } from '@angular/core';
import { Shoe } from '../../../models/shoe';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.scss']
})
export class ShoeCardComponent {
  @Input() shoe!: Shoe;
}
