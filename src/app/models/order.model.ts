
export interface IOrder {
  totalQuantity?: number;
  totalPrice?: number;
}

export class Order implements IOrder {
  totalPrice?: number;
  totalQuantity?: number;

  constructor(totalPrice?: number, totalQuantity?: number) {
    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;
  }
}

