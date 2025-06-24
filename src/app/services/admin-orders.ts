import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Pedido {
  id: number;
  user:string
  date: string;
  status: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminOrdersService {
  private apiUrl = 'https://backend-olimpiadas.onrender.com/orders';
 
  constructor(private http: HttpClient) {}

  getPendientes(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/pendientes`);
  }

  cambiarEstado(id: number, nuevoEstado: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/status`, { status: nuevoEstado });
  }
}
