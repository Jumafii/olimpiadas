import { Component } from '@angular/core';
import { Pedido } from '../../../services/admin-orders';
import { AdminOrdersService } from '../../../services/admin-orders';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-pending-orders',
  imports: [CommonModule],
  templateUrl: './pending-orders.html',
  styleUrl: './pending-orders.css'
})
export class PendingOrders  {
pedidosPendientes: Pedido[] = [];

  constructor(private ordersService: AdminOrdersService) {}

  ngOnInit(): void {
    this.ordersService.getPendientes().subscribe((res) => {
      this.pedidosPendientes = res;
    });
  }

  actualizarEstado(pedidoId: number, nuevoEstado: string) {
    this.ordersService.cambiarEstado(pedidoId, nuevoEstado).subscribe(() => {
      this.pedidosPendientes = this.pedidosPendientes.filter(p => p.id !== pedidoId);
    });
  }

}
