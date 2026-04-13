export interface IOrderData {
  id: number;
  name: string;
  image: string;
  date: string;
  productPrice: number;
  totalPrice: number;
  quantity: number;
  status: 'Pending' | 'Approved' | 'In Process';
}

export interface IOrdersResponse {
  items: IOrderData[];
  totalCount: number;
}
