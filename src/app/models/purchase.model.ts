
import {IOrderItem} from './order-item.model';
import {Customer, ICustomer} from './customer.model';
import {Order} from './order.model';
import {Address, IAddress} from './address.model';

export interface IPurchase {
  customer: ICustomer;
  shippingAddress: IAddress;
  billingAddress: IAddress;
  order: Order;
  orderItems: IOrderItem[];

}

// todo: check later
export class Purchase implements IPurchase {
  billingAddress!: IAddress;
  customer!: ICustomer;
  order!: Order;
  orderItems!: IOrderItem[];
  shippingAddress!: Address;


  constructor() {

  }
}

