import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../../../core/services/orders-service';
import { IOrderData } from '../../../../core/models/order-data-interface';

@Component({
  selector: 'app-order-details-page',
  standalone: false,
  templateUrl: './order-details-page.html',
  styleUrl: './order-details-page.scss',
})
export class OrderDetailsPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly ordersService = inject(OrdersService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly order = signal<IOrderData | null>(null);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loading.set(true);
      this.error.set(null);
      this.ordersService.getOrder(id).subscribe({
        next: (order) => {
          this.order.set(order);
          this.loading.set(false);
        },
        error: (err: Error) => {
          this.error.set(err.message ?? 'Order not found');
          this.loading.set(false);
        },
      });
    });
  }
  goBack(): void {
    this.router.navigate(['/orders']);
  }
}
