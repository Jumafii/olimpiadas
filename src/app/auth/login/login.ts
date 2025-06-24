import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router) 
  {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  get Password()
  {
    return this.loginForm.get("password");
  }

  get Email()
  {
    return this.loginForm.get("email");
  }


onEnviar(event: Event) {
  if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log("Login exitoso", response);

        //  tomar rol del backend
        const rol = response.rol || 'user'; // o 'admin'

        // Guardar en localStorage
        localStorage.setItem('rol', rol);

        // Redirigir según el rol
        if (rol === 'admin') {
          this.router.navigateByUrl('/dashboard-admin');
        } else {
          this.router.navigateByUrl('/dashboard-client');
        }
      },
      error: (error) => {
        alert("Error en el login");
        console.error("Error en el login", error);
      }
    });
  } else {
    console.log("Formulario inválido");
  }
}
irARegistro() {
  this.router.navigateByUrl('/register');
}
}
