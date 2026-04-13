import { Injectable } from '@angular/core';
import { debounceTime, delay, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { SortedOrders } from '../mock/orders-mock-data';
import { IApiResponse } from '../models/api-response-interface';
import { IOrderData, IOrdersResponse } from '../models/order-data-interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  getAllOrders(page: number = 0, size: number = 10): Observable<IApiResponse<IOrdersResponse>> {
    return of(SortedOrders).pipe(
      delay(2000),
      map((data) => ({
        success: true,
        data: {
          totalCount: data.length,
          items: data.slice(page * size, page * size + size),
        },
      })),
    );
  }

  searchOrders(query: string): Observable<IOrderData[]> {
    return of(query).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((q) =>
        of(SortedOrders).pipe(
          delay(500),
          map((data) =>
            data.filter((o) => o.name.toLowerCase().includes(q.toLowerCase())).slice(0, 3),
          ),
        ),
      ),
    );
  }

  getOrder(id: number): Observable<IOrderData> {
    return of(SortedOrders).pipe(
      delay(1000),
      map((data) => {
        const order = data.find((o) => o.id === id);
        if (!order) {
          throw new Error('Order not found');
        }
        return order;
      }),
    );
  }
}
