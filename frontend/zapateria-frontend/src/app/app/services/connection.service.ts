import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class Connection {

  constructor(private http:HttpClient) { 
    const obs :Observer <Product[]> = {
      next:p=> {},
      error:e=> {},
      complete:()=>{}
  }

  this.http.get<Product[]>('localhost:1234').subscribe(obs);
  }
}
