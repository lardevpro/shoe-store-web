
import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ProductModel  } from '../../models/product';
@Component({
  selector: 'app-product-card',
  imports: [NzCardModule],
  template: `
    <nz-card nzHoverable style="width:240px" [nzCover]="coverTemplate">
      <nz-card-meta [nzTitle]="product.productName" nzDescription="www.instagram.com"></nz-card-meta>
      <p> {{product.price}} €</p>
      <p>Tallas: {{product.sizes}}</p>
      <p>categoría: {{product.category}}</p>
      <p>{{product.description}}</p>
    </nz-card>
    <ng-template #coverTemplate>
      <img alt="imagen del producto" [src]="product.images[0]" />
    </ng-template>
  `,
  styles: `
  
  `
})
export class ProductCardComponent {
  @Input() product!: ProductModel ;
}



