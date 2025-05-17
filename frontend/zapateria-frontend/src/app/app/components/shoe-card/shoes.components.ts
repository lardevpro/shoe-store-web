import { OnInit } from "@angular/core";
import { Product } from "../../../models/product";
import { Connection } from "../../services/connection.service";

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
