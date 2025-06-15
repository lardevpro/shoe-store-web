import { Component } from '@angular/core';
import { OwnersComponent } from "../../components/about-owners/owners.component";
import { ImgOwnersComponent } from "../../components/img-owners/img-owners.component";
import { BrandComponent } from "../../components/brand/brand.component";
@Component({
  selector: 'app-about',
  imports: [OwnersComponent, ImgOwnersComponent, BrandComponent],
  template: `
    <app-img-owners></app-img-owners>
    <app-brand></app-brand>
    <app-about-owners></app-about-owners>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}