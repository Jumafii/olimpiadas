import { Routes } from '@angular/router';
import { Home} from './pages/home/home';
import { Aboutus } from './pages/aboutus/aboutus';
import { Contact } from './pages/contact/contact';
import { Login} from './auth/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'info',
    children: [
      { path: 'about', component: Aboutus },
      { path: 'contact', component: Contact }
    ]
  },
  { path: 'login', component: Login }
];
