import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CartItem {
  id: number;
  product_id: number;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  imports: [CommonModule, FormsModule]
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];

  ngOnInit(): void {
    // Datos simulados
    this.cart = [
      {
        id: 1,
        product_id: 101,
        description: 'Paquete a Bariloche',
        price: 50000,
        quantity: 2
      },
      {
        id: 2,
        product_id: 102,
        description: 'Excursión a los lagos',
        price: 12000,
        quantity: 1
      }
    ];
  }

  getTotal(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  eliminarItem(itemId: number): void {
    this.cart = this.cart.filter(item => item.id !== itemId);
  }
}
