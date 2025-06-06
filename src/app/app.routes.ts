import { registerAppScopedDispatcher } from '@angular/core/primitives/event-dispatch';
import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Home } from './pages/home/home';
import { Register } from './auth/register/register';

export const routes: Routes = [Register,Login,Home];
