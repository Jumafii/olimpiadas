import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Orders } from './orders/orders';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-dashboard-user',
  imports: [ProductList, Orders, Cart],
  templateUrl: './dashboard-user.html',
  styleUrl: './dashboard-user.css'
})
export class DashboardUser {

}
