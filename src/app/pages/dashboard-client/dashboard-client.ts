import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-client',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './dashboard-client.html',
  styleUrls: ['./dashboard-client.css']
})
export class DashboardClient {

constructor(private router: Router) {}

  logout(): void {
    // Lógica para cerrar sesión, limpiar tokens, etc.
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
