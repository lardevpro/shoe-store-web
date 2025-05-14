import { Component } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IvyCarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    { path: 'images/tienda1.jpg' },
    { path: 'images/tienda2.jpg' },
    { path: 'images/tienda3.jpg' }
  ];
}
