import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartItem {
  id: number;
  product_id: number;
  description: string;
  price: number;
  quantity: number;
}


@Injectable({ providedIn: 'root' })
export class CartService {
  private apiUrl = 'https://backend-olimpiadas.onrender.com/cart';

  constructor(private http: HttpClient) {}

  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  addItem(item: CartItem): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  removeItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
