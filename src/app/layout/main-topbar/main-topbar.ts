import { ChangeDetectionStrategy, Component, inject, signal, viewChild } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Popover } from 'primeng/popover';
import { OrdersService } from '../../core/services/orders-service';
import { Router } from '@angular/router';
import { IOrderData } from '../../core/models/order-data-interface';

@Component({
  selector: 'app-main-topbar',
  standalone: false,
  templateUrl: './main-topbar.html',
  styleUrl: './main-topbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTopbar {
  private readonly ordersService = inject(OrdersService);
  private readonly router = inject(Router);

  isSearchLoading = signal(false);
  results = signal<IOrderData[]>([]);
  searchQuery = signal('');
  searchEvent = signal<Event | null>(null);

  searchPopover = viewChild.required<Popover>('searchPopover');

  constructor() {
    toObservable(this.searchQuery)
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => {
          if (!query.trim()) {
            this.searchPopover().hide();
            return [];
          }

          this.isSearchLoading.set(true);

          const event = this.searchEvent();
          if (event) {
            this.searchPopover().show(event);
          }

          return this.ordersService.searchOrders(query);
        }),
      )
      .subscribe((data) => {
        this.results.set(data);
        this.isSearchLoading.set(false);
      });
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
    this.searchEvent.set(event);
  }

  viewOrder(id: number): void {
    this.searchPopover().hide();
    this.router.navigate(['/orders', id]);
  }
}
