import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class Connection {

  private apiUrl = 'http://localhost:1234/products'; 

  constructor(private http: HttpClient) { }

  getAllShoes(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
