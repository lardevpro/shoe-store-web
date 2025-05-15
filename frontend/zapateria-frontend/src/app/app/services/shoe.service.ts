import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoe } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  private apiUrl = 'http://localhost:1234/shoes'; // PULSA CRTL + CLIC IZQUIERDO a mi me sale la lista de productos en formato JSON !!!

  constructor(private http: HttpClient) { }

  getAllShoes(): Observable<Shoe[]> {
    return this.http.get<Shoe[]>(this.apiUrl);
  }
  
}
