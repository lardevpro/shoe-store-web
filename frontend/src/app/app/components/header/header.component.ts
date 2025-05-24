import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
@Component({
  selector: 'app-header',
  imports: [NzLayoutModule],
  template: `
  <nz-sider class="content"> 
    <img src="images/logo.png" alt="Zapatería Logo"/>
  </nz-sider>
  `,
  styles: `
      nz-sider {
          background: #3ba0e9;
          color: #fff;
          line-height: 120px;
        }

        img {
          width: 100%;
          max-width: 200px;
          padding: 5px;
          cursor: pointer;
          border-radius: 13px;
          border: 1.5px solid rgb(154, 207, 245);
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          img {
            margin-right: 200px;
          }
        }
          `
})
export class HeaderComponent {

}
