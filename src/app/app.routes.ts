import { registerAppScopedDispatcher } from '@angular/core/primitives/event-dispatch';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Aboutus } from './pages/aboutus/aboutus';
import { Contact } from './pages/contact/contact';
import { Register } from './auth/register/register';
import { PendingOrders } from './pages/dashboard-admin/pending-orders/pending-orders';
import { ProductList } from './pages/dashboard-admin/product-list/product-list';
import { DashboardAdmin } from './pages/dashboard-admin/dashboard-admin';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login},
  {path: 'register', component:Register},
  {path: 'adminDashboard', component: DashboardAdmin,
    children: [
    { path: 'pendientes', loadComponent: () => import('./pages/dashboard-admin/pending-orders/pending-orders').then(m => m.PendingOrders) },
      { path: 'productos', loadComponent: () => import('./pages/dashboard-admin/product-list/product-list').then(m => m.ProductList) },
      { path: 'crear', loadComponent: () => import('./pages/dashboard-admin/product-create/product-create').then(m => m.ProductCreate) },
      { path: '', redirectTo: 'pendientes', pathMatch: 'full' }]
  },
];
