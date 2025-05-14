import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    'images/imagesStore/fachada1.jpeg',
    'images/imagesStore/fachada2.jpeg',
    'images/imagesStore/fachada3.jpeg'
  ];
  current = 0;

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  }
  next() {
    this.current = (this.current + 1) % this.images.length;
  }
}
