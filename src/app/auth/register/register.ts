import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'] 
})
export class Register {
  nombre = '';
  lastname = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorPassword = false;

  registrar() {
    if (this.password !== this.confirmPassword) {
      this.errorPassword = true;
    } else {
      this.errorPassword = false;
      console.log('Registro exitoso:', {
        nombre: this.nombre,
        apellido: this.lastname,
        email: this.email,
        password: this.password
      });
    }
  }
}

