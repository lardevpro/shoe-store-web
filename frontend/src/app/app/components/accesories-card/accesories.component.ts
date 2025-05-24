import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/shoe';



@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.scss']
})
export class AccessoriesComponent {
  accesories : Product[] = [];

  constructor() {}
}
