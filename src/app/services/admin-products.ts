import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


 export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imagen?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {
  private apiUrl = 'https://backend-olimpiadas.onrender.com/products'; 

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); // GET /products
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product); // POST /products
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product); // PUT /products/{id}
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`); // DELETE /products/{id}
  }
}
