// src/app/core/services/analytics-service.ts
import { inject, Injectable, signal } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { CHART_MOCK_DATA } from '../mock/chart-mock-data';
import { SortedOrders } from '../mock/orders-mock-data';
import { IAnalyticsData } from '../models/analytics-data-interface';
import { IApiResponse } from '../models/api-response-interface';
import { IChartData } from '../models/chart-data-interface';
import { IOrderData } from '../models/order-data-interface';
import { OrdersService } from './orders-service';
import { IDateFilter } from '../../features/dashboard/models/order-interfaces';

export interface AnalyticsCardValues {
  revenue: number;
  orders: number;
  items: number;
  users: number;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private readonly ordersService = inject(OrdersService);
  gneralAnalytics = signal<IAnalyticsData | null>(null);
  recentOrders = signal<IOrderData[]>([]);
  lineChartData = signal<IChartData | null>(null);
  barChartData = signal<IChartData | null>(null);

  lineChartLoading = signal(false);
  barChartLoading = signal(false);
  recenOrderLoading = signal(false);
  generalAnalyticsLoading = signal(false);

  readonly analyticsCardLoading = signal(false);
  readonly analyticsCardValues = signal<AnalyticsCardValues>({
    revenue: randomInt(50_000, 500_000),
    orders: randomInt(100, 5_000),
    items: randomInt(200, 10_000),
    users: randomInt(50, 500),
  });

  getGeneralAnalytics(): Observable<IApiResponse<IAnalyticsData>> {
    const anlytics: IAnalyticsData = { itemsSold: 0, totalOrders: 0, totalRevenue: 0 };
    return of(SortedOrders).pipe(
      delay(1000),
      map((orders) => {
        orders.forEach((order) => {
          anlytics.itemsSold += order.quantity;
          anlytics.totalRevenue += order.totalPrice;
        });
        anlytics.totalOrders = orders.length;
        return { success: true, data: anlytics };
      }),
    );
  }

  loadGeneralAnaltics() {
    this.generalAnalyticsLoading.set(true);
    this.getGeneralAnalytics().subscribe({
      next: (res) => {
        if (res.success) {
          this.gneralAnalytics.set(res.data);
        }
      },
      complete: () => {
        this.generalAnalyticsLoading.set(false);
      },
    });
  }

  loadRecentOrders(page: number = 0) {
    this.recenOrderLoading.set(true);
    this.ordersService.getAllOrders(page, 5).subscribe({
      next: (res) => {
        if (res.success) {
          this.recentOrders.set(res.data.items);
        }
      },
      complete: () => {
        this.recenOrderLoading.set(false);
      },
    });
  }

  getLineChartData(type: string, timeRange: string): Observable<IApiResponse<IChartData>> {
    const data = CHART_MOCK_DATA[`${type}-${timeRange}`];
    return of(data).pipe(
      delay(500),
      map((chartData) => ({ success: true, data: chartData })),
    );
  }

  loadLineChartData(type: string, timeRange: string): void {
    this.lineChartLoading.set(true);
    this.getLineChartData(type, timeRange).subscribe({
      next: (res) => {
        if (res.success) {
          this.lineChartData.set(res.data);
        }
        this.lineChartLoading.set(false);
      },
      error: () => {
        this.lineChartLoading.set(false);
      },
    });
  }

  refreshCardData(_filter: IDateFilter): void {
    this.analyticsCardLoading.set(true);
    setTimeout(() => {
      this.analyticsCardValues.set({
        revenue: randomInt(50_000, 500_000),
        orders: randomInt(100, 5_000),
        items: randomInt(200, 10_000),
        users: randomInt(50, 500),
      });
      this.analyticsCardLoading.set(false);
    }, 700);
  }

  loadBarChartData(timeRange: string): void {
    this.barChartLoading.set(true);
    this.getLineChartData('sales', timeRange).subscribe({
      next: (res) => {
        if (res.success) {
          this.barChartData.set(res.data);
        }
        this.barChartLoading.set(false);
      },
      error: () => {
        this.barChartLoading.set(false);
      },
    });
  }
}
