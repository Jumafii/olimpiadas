import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderDetail {
  id: number;
  product_id: number;
  description: string;
  price: number;
}

export interface Order {
  id: number;
  user_id: number;
  date: string;
  price: number;
  status: 'pendiente' | 'aprobado' | 'anulado';
  details: OrderDetail[];
}

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private apiUrl = 'https://backend-olimpiadas.onrender.com/orders';

  constructor(private http: HttpClient) {}

  getMyOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/mine`);
  }

  createOrder(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }

  updateStatus(id: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/status`, { status });
  }
}
