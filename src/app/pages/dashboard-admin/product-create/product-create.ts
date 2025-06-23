import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminProductsService } from '../../../services/admin-products';


@Component({
  selector: 'app-product-create',
  imports: [ReactiveFormsModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreateComponent {
  productForm: ReturnType<FormBuilder['group']>;
  http: any;

  constructor(
    private formBuilder: FormBuilder,
    private adminProducts: AdminProductsService, 
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: [0, [Validators.required, Validators.min(0)]],
      categoria: [''],
      imagen: [''] // URL de imagen
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.adminProducts.createProduct(this.productForm.value).subscribe(() => {
        alert('Producto creado!');
        this.productForm.reset();
      });
    }
  }

}
