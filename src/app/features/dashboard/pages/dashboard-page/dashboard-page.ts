import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { IAnalyticCard } from '../../models/analytic-card-interfaces';
import { AnalyticsService } from '../../../../core/services/analytics-service';
import { IDateFilter } from '../../models/order-interfaces';

@Component({
  selector: 'app-dashboard-page',
  standalone: false,
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage implements OnInit {
  analyticsService = inject(AnalyticsService);

  isPageLoaded = computed(() => {
    return (
      !this.analyticsService.generalAnalyticsLoading() && !this.analyticsService.recenOrderLoading()
    );
  });

  readonly analyticsCardLoading = this.analyticsService.analyticsCardLoading;

  readonly analyticCards = computed<IAnalyticCard[]>(() => {
    const v = this.analyticsService.analyticsCardValues();
    return [
      {
        label: 'Total Revenue',
        value: v.revenue,
        valueFormat: 'currency',
        change: '+3.4%',
        changePositive: true,
        iconSrc: 'images/analytic-1.png',
        iconAlt: 'Total Revenue',
      },
      {
        label: 'Total Orders',
        value: v.orders,
        valueFormat: 'number',
        change: '+12%',
        changePositive: true,
        iconSrc: 'images/analytic-2.png',
        iconAlt: 'Total Orders',
      },
      {
        label: 'Items Sold',
        value: v.items,
        valueFormat: 'number',
        change: '-2.1%',
        changePositive: false,
        iconSrc: 'images/analytic-3.png',
        iconAlt: 'Items Sold',
      },
      {
        label: 'Users Active',
        value: v.users,
        valueFormat: 'number',
        change: '+5.7%',
        changePositive: true,
        iconSrc: 'images/analytic-4.png',
        iconAlt: 'Users Active',
      },
    ];
  });

  ngOnInit(): void {
    this.analyticsService.loadRecentOrders();
  }

  onFilterChange(filter: IDateFilter): void {
    this.analyticsService.refreshCardData(filter);
  }
}
