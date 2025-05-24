import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Product } from "../../models/product.model";


@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent  {
  products: Product[] = [];
  
  constructor() {}
}
