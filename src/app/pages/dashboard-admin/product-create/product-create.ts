import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminProductsService, Product } from '../../../services/admin-products';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})

export class ProductCreate {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: AdminProductsService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [null, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      imagen: [''],
    });
  }
  products: Product[] = []
  onSubmit() {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      this.productService.createProduct(product).subscribe(() => {
        alert('Producto creado correctamente');
        this.router.navigate(['/adminDashboard/productos']);
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }
  deleteProducto(id: number) {
  if (confirm('¿Estás seguro de eliminar este producto?')) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
    });
  }
}
}
