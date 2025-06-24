import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const rol = localStorage.getItem('rol');
    const esperado = route.data['rol'];

    if (rol === esperado) return true;

    this.router.navigate(['/login']);
    return false;
  }
}
