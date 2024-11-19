import {OrderItem} from './order-item.model';

export interface IOrderHistory {
  id?: number;
  orderTrackingNumber: string;
  totalPrice: number;
  totalQuantity: number;
  dateCreated?: Date;
  lastUpdated?: Date;
  orderItems: Set<OrderItem>;
}
export class OrderHistory implements IOrderHistory {

  id?: number;
  orderTrackingNumber!: string;
  totalPrice!: number;
  totalQuantity!: number;
  dateCreated?: Date;
  lastUpdated?: Date;
  orderItems!: Set<OrderItem>;


  // constructor(dateCreated: Date, id: string, orderTrackingNumber: string, totalPrice: number, totalQuantity: number) {
  //   this.dateCreated = dateCreated;
  //   this.id = id;
  //   this.orderTrackingNumber = orderTrackingNumber;
  //   this.totalPrice = totalPrice;
  //   this.totalQuantity = totalQuantity;
  // }
}
