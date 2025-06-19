import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get Nombre() {
    return this.registerForm.get("nombre");
  }

  get Email() {
    return this.registerForm.get("email");
  }

  get Password() {
    return this.registerForm.get("password");
  }

  onRegistrar(event: Event) {
    if (this.registerForm.valid) {
      // Aquí enviarías los datos al backend para registrar al usuario
      console.log(this.registerForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}