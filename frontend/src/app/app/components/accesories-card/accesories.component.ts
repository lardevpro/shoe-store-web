import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accessories } from '../../models/accessories';



@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.scss']
})
export class AccessoriesComponent {
  accessories : Accessories[] = [];

  constructor() {}
}
