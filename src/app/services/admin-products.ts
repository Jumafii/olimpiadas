import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductList } from '../pages/dashboard-admin/product-list/product-list';

@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {
  private apiUrl = 'https://backend-olimpiadas.onrender.com';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductList[]> {
    return this.http.get<ProductList[]>(this.apiUrl);
  }
  getById(id: number): Observable<ProductList> {
    return this.http.get<ProductList>(`${this.apiUrl}/${id}`);
  }
  create(product: ProductList): Observable<ProductList> {
    return this.http.post<ProductList>(this.apiUrl, product);
  }

  update(id: number, product: ProductList): Observable<ProductList> {
    return this.http.put<ProductList>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/products`, product);
  }
}