import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'http://localhost:1234/products';

  constructor(private http: HttpClient) {}

   getProducts$<T>(params: { category?: string, gender?: string }): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl, { params });
  }
}