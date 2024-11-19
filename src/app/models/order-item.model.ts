import {ICardItem} from './cardItem.model';
import {Order} from './order.model';


export interface IOrderItem {
  id?: number;
  name?: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  productId: string;
  order: Order;
}

export class OrderItem implements IOrderItem {
  id?: number;
  name?: string;
  imageUrl: string;
  productId: string;
  quantity: number;
  unitPrice: number;

  order: Order = new Order();



  constructor(cartItem: ICardItem) {
    this.name= cartItem.name;
    this.imageUrl = cartItem.imageUrl;
    this.quantity = cartItem.quantity;
    this.unitPrice = cartItem.unitPrice;
    this.productId = cartItem.id;
  }
}

