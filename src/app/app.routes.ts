import { registerAppScopedDispatcher } from '@angular/core/primitives/event-dispatch';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Home } from './pages/home/home';
import { Aboutus } from './pages/aboutus/aboutus';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home ,
    children: [ 
      {path: 'about', component: Aboutus},
      {path: 'contact', component: Contact} ]
     },
  {path: 'login', component:Login}
];
