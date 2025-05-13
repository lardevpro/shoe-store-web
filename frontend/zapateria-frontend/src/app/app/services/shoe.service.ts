import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoe } from '../../models/shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  private apiUrl = 'http://localhost:1234/shoes'; // HAY QUE VERIFICAR LA URL !!!

  constructor(private http: HttpClient) { }

  getAllShoes(): Observable<Shoe[]> {
    return this.http.get<Shoe[]>(this.apiUrl);
  }
}
