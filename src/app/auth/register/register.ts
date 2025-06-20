import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private AuthService:AuthService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', Validators.required],
    });
  }

  get first_name() {
    return this.registerForm.get('first_name');
  } 

  get last_name() {
    return this.registerForm.get('last_name');
  } 

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get rol() {
    return this.registerForm.get('rol');
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      console.log('UserData:', userData);
      // Aquí puedes llamar al servicio de registro para enviar los datos al backend
      this.AuthService.register(userData).subscribe(response => {
        console.log('Registro exitoso:', response);
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}