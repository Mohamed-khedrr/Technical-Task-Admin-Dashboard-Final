export type OrderStatus = 'pending' | 'approved' | 'in-process';

export type DateRange =
  | 'today'
  | 'yesterday'
  | 'this-week'
  | 'last-week'
  | 'this-month'
  | 'last-month'
  | 'custom';

export interface IDateFilter {
  range: DateRange;
  customStart?: Date;
  customEnd?: Date;
}

export interface IOrder {
  id: number;
  itemName: string;
  itemImageSrc: string;
  itemImageAlt: string;
  quantity: number;
  orderDate: string;
  amount: string;
  status: OrderStatus;
}
