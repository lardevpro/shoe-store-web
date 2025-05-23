import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'http://localhost:1234/products';

  constructor(private http: HttpClient) {}

  getProducts(params: { category?: string, gender?: string }): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
}