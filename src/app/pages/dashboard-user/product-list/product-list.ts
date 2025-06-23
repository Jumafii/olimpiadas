import { Component } from '@angular/core';
import { Cart } from '../cart/cart';
import { AdminOrdersService } from '../../../services/admin-orders'; 
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [Cart],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private adminOrders: AdminOrdersService,
    private router: Router ){
      this.formBuilder.group({
        nombre: ['', Validators.required],
        descripcion: [''],
        precio: [0, [Validators.required, Validators.min(0)]],
        categoria: [''],
        imagen: [''] // URL de imagen
      });
    }
  onSubmit() {}

  addProduct(product) {
    this.products.push(products);
  }

  removeProduct(productId) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
