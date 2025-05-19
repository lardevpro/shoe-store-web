import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-navbar',
  imports: [NzButtonModule],
  template: `
           <header style="display: flex; align-items: center; justify-content: space-between; padding: 0 20px; ">
              <img src="images/logo.png" alt="Zapatería Logo" />
                <nav style="flex: 1; display: flex; justify-content: center; gap: 20px;">
                  <button nz-button nzType="text" >Catálogo</button>
                  <button nz-button nzType="text" >Sobre Nosotros</button>
                  <a nz-button nzType="link" href="#" >Contacto</a>
                </nav>
          </header>
            `,
            
 styles: [
    `  
      button {
        border-radius: 13px;
        background-color: rgb(246, 115, 246);
      }
      
      img {
        width: 200px;
        padding: 5px;
        cursor: pointer;
        border-radius: 13px;
        border: 1.5px solidrgb(174, 106, 238);
        background-color:rgb(249, 175, 249); 
        margin-right: 200px;
      }
      
    `
  ]
})

export class NavbarComponent {

}
