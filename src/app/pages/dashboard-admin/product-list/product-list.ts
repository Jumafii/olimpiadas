import { Component, OnInit } from '@angular/core';
import { AdminProductsService, Product } from '../../../services/admin-products';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList implements OnInit {
  products: Product[] = [];
loadProducts: any;
  router: any;

  constructor(private productService: AdminProductsService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productService.getProducts().subscribe(data => {
       console.log('Productos recibidos:', data);
      this.products = data;
    });
  }

  deleteProducto(id: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(p => p.id !== id);
        this.cargarProductos(); // Recargar productos después de eliminar
      }, error => {
        console.error('Error al eliminar el producto:', error);
        alert('Error al eliminar el producto. Por favor, inténtalo de nuevo más tarde.');
      });
    }
  }
}
