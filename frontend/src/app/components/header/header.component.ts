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
          cursor: pointer;
          border-radius:var(--border-radius);
          border: 1.5px solid rgb(154, 207, 245);
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .content {
            margin-right: 200px;
            margin-bottom: 40px;
          }
        }
          `
})
export class HeaderComponent {

}
