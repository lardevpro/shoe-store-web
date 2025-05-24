import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bag } from '../../models/bag';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent {
  bags: Bag[] = [];
    

  constructor() {}
}
