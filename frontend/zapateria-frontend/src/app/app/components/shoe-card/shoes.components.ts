import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Product } from "../../../models/product";
import { Connection } from "../../services/product.service";

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {
  products: Product[] = [];
  genders = [
    { key: 'male', label: 'Hombre' },
    { key: 'female', label: 'Mujer' },
    { key: 'unisex', label: 'Unisex' }
  ];
  selectedGender: string | null = null;

  constructor(private connection: Connection) {}

  ngOnInit() {
    this.loadProducts();
  }

  onGenderSelected(gender: string) {
    this.selectedGender = gender === this.selectedGender ? null : gender;
    this.loadProducts();
  }

  private loadProducts() {
    if (this.selectedGender) {
      this.connection.getProductsByGender('zapatos', this.selectedGender)
        .subscribe({
          next: (products) => this.products = products,
          error: (error) => console.error('Error:', error)
        });
    } else {
      this.connection.getProductsByCategory('zapatos')
        .subscribe({
          next: (products) => this.products = products,
          error: (error) => console.error('Error:', error)
        });
    }
  }
}
