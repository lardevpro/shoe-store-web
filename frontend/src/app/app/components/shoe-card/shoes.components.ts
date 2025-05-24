import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Shoe } from "../../models/shoes";



@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent  {
  shoes: Shoe[] = [];
  
  constructor() {}
}
