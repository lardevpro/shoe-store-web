import { Component } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-img-owners',
    imports: [NzImageModule],
    template: `
      <img style="border-radius: var(--border-radius); padding: 60px;"
        nz-image
        width="400px"
        height="500px"
        nzSrc="images/market/carmen.jpeg"
        alt="imagen Propietarios"
      />
  `
})
export class ImgOwnersComponent  {

}




