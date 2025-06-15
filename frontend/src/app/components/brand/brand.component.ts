import { Component } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';
@Component({
  selector: 'app-brand',
 imports: [NzImageModule],
  template: `
    <nz-image-group>
      <img nz-image width="150px" nzSrc="https://dollsanddolls.com/blog/wp-content/uploads/2018/07/anekkelogofigura.png" alt="" />
      <img nz-image width="150px" nzSrc="https://lormastories.es/img/cms/PITILLOS.png" alt="" />
      <img nz-image width="150px" nzSrc="https://logovectordl.com/wp-content/uploads/2021/10/doctor-cutillas-logo-vector.png" alt="" />
      <img nz-image width="150px" nzSrc="https://www.etikashoes.es/cdn/shop/files/logo-etika-us.svg?v=1725891580&width=213" alt="" />
      <img nz-image width="150px" nzSrc="https://calzandos.com/img/cms/Fluchos600x600.png" alt="" />
      <img nz-image width="150px" nzSrc="https://exodo-ja.com/wp-content/uploads/2022/05/75624C70-96C4-4E47-85C2-E6BF67561429-e1735239730393.png" alt="" />
    </nz-image-group>
  `,
  styles: `
     img {
      border-radius: var(--border-radius);
      padding: 10px;
     }
  `
})
export class BrandComponent  {


}


