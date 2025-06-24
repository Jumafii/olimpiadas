import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DetailsResponse {
  id: number;
  product_id: number;
  description: string;
  price: number;
}

interface OrdersResponse {
  id: number;
  user_id: number;
  date: string;
  price: number;
  status: 'pendiente' | 'aprobado' | 'anulado';
  details: DetailsResponse[];
}

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.html',
  styleUrls: ['./orders.css'],
  imports: [CommonModule, FormsModule]  // 👈 Soluciona todos los errores
})
export class OrdersComponent implements OnInit {
  orders: OrdersResponse[] = [];

  ngOnInit(): void {
    this.orders = [
      {
        id: 1,
        user_id: 101,
        date: new Date().toISOString(),
        price: 19999.99,
        status: 'pendiente',
        details: [
          { id: 1, product_id: 11, description: 'Vuelo a Bariloche', price: 15000 },
          { id: 2, product_id: 12, description: 'Hotel 3 noches', price: 4999.99 },
        ]
      }
    ];
  }

  cambiarEstado(order: OrdersResponse, nuevoEstado: string) {
    order.status = nuevoEstado as any;
  }
}
