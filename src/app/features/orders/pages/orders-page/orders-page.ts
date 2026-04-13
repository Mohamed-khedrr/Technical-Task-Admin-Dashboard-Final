import { Component, computed, inject, signal } from '@angular/core';
import { IOrderData } from '../../../../core/models/order-data-interface';
import { OrdersService } from '../../../../core/services/orders-service';
import { Router } from '@angular/router';
import { TableLazyLoadEvent } from 'primeng/table';

@Component({
  selector: 'app-orders-page',
  standalone: false,
  templateUrl: './orders-page.html',
  styleUrl: './orders-page.scss',
})
export class OrdersPage {
  private readonly ordersService = inject(OrdersService);
  private readonly router = inject(Router);

  readonly pageSize = 8;
  readonly currentPage = signal(1);
  readonly loading = signal(false);
  readonly orders = signal<IOrderData[]>([]);
  readonly totalOrders = signal(0);
  readonly totalPages = computed(() => Math.ceil(this.totalOrders() / this.pageSize));
  readonly pageNumbers = computed(() => {
    const total = this.totalPages();
    return total > 0 ? Array.from({ length: total }, (_, i) => i + 1) : [];
  });

  ngOnInit(): void {
    this.loadPage(1);
  }
  onLazyLoad(event: TableLazyLoadEvent) {
    const page = (event.first ?? 0) / (event.rows ?? this.pageSize) + 1;
    this.loadPage(page);
  }
  loadPage(page: number): void {
    this.loading.set(true);
    this.currentPage.set(page);
    this.ordersService.getAllOrders(page - 1, this.pageSize).subscribe({
      next: (res) => {
        this.orders.set(res.data.items);
        this.totalOrders.set(res.data.totalCount);
        this.loading.set(false);
      },
      error: (err: Error) => {
        this.loading.set(false);
      },
    });
  }

  viewOrder(id: number): void {
    this.router.navigate(['/orders', id]);
  }
}
