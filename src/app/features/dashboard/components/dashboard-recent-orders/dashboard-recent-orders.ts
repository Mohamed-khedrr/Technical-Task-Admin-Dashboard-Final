import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../../../core/services/analytics-service';
import { TablePageEvent } from 'primeng/table';

@Component({
  selector: 'app-dashboard-recent-orders',
  standalone: false,
  templateUrl: './dashboard-recent-orders.html',
  styleUrl: './dashboard-recent-orders.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardRecentOrders {
  private readonly router = inject(Router);
  readonly analyticsService = inject(AnalyticsService);

  readonly pageSize = 5;

  viewOrder(id: number): void {
    this.router.navigate(['/orders', id]);
  }
}
