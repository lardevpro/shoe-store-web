import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMarks, NzSliderModule } from 'ng-zorro-antd/slider';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-catalog',
  imports: [FormsModule, NzGridModule, NzSliderModule, ProductCardComponent],
  template: `
    <div class="image-container">
      @for (index of images; track $index) {
        <app-product-card></app-product-card>
      }
    </div>
  `,
  styles: [
    `
      .image-container {
        display: flex;
        flex-wrap: wrap; 
        gap: 32px;
      }

      .image-container img {
        border-radius: var(--border-radius);
        width: 200px;
        height: 200px;
        box-shadow: 0px 0px 30px #000000;
      }
    `
  ]
})
export class CatalogComponent {
  images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}