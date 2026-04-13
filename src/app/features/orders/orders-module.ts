import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsPage } from './pages/order-details-page/order-details-page';
import { OrdersPage } from './pages/orders-page/orders-page';
import { OrdersRoutingModule } from './order-routing-module';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [OrderDetailsPage, OrdersPage],
  imports: [CommonModule, OrdersRoutingModule, TableModule, ProgressSpinnerModule],
})
export class OrdersModule {}
