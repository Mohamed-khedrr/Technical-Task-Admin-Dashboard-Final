import { OrderStatus } from './order-interfaces';

export const STATUS_LABELS: Record<OrderStatus, string> = {
  pending: 'Pending',
  approved: 'Approved',
  'in-process': 'In Process',
};
