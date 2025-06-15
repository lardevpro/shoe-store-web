import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDemoAutoCompleteStatusComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-dropdow',
  imports: [RouterLink,
    NzButtonModule,
    NzDropDownModule,
    NzIconModule, NzDemoAutoCompleteStatusComponent],
  template: `
    <nz-button-group>
      <button nz-button nz-dropdown [nzDropdownMenu]="menu" nzPlacement="bottomRight">
        <nz-icon nzType="ellipsis" />
      </button>
    </nz-button-group>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ genre: 'hombre', category: 'zapatos' }">Zapatos Hombre</li>
        <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ genre: 'mujer', category: 'zapatos' }">Zapatos Mujer</li>
        <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ category: 'bolsos' }">Bolsos</li>
        <li nz-menu-item [routerLink]="['/catalog']" [queryParams]="{ category: 'complementos' }">Complementos</li>
        <li><app-search-bar></app-search-bar></li>
      </ul>
    </nz-dropdown-menu>
  `,
  styles: [
    `
      nz-button-group {
        width: 50px;
       
      }
      button {
         border-radius: var(--border-radius);
      }
    `
  ]
})
export class DropdowComponent  {

  log(): void {
    console.log('click dropdown button');
  }
}
