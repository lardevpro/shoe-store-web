import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
@Component({
  selector: 'app-header',
  imports: [NzLayoutModule],
  template: `
  <nz-sider class="content"> 
    <img src="images/market/logo.png" alt="Zapatería Logo"/>
  </nz-sider>
  `,
  styles: `
        img {
          width: 100%;
          max-width: 200px;
          padding: 5px;
          position: relative;
          border-radius:var(--border-radius);
          border: var(--border-solid-weidth) solid var(--borde-solid);
          margin: 0 auto;
        } 
          `
})
export class HeaderComponent {

}
