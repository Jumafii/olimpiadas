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

  ngOnInit(): void {}
  
  agregarItem(item: CartItem): void {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push({ ...item, quantity: item.quantity });
    }
  }
  getTotal(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  eliminarItem(itemId: number): void {
    this.cart = this.cart.filter(item => item.id !== itemId);
  }
}
