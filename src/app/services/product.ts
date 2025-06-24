import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './admin-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://backend-olimpiadas.onrender.com/products';

  constructor(private http: HttpClient) {}

getAll(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl);
}

getById(id: string): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/${id}`);
}

}