import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder) 
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


  onEnviar(event:Event)
  {
    if (this.loginForm.valid)
    {
      // Conectar con el backend para autenticar al usuario
      console.log(this.loginForm.value)
    }
    else
    {
      // Mostrar mensaje de error
      console.log("Formulario inválido");
    }
    
  }
}