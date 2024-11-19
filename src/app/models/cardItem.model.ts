import {IProduct} from './product.model';
import {IProductCategory} from './product-category.model';

export interface ICardItem {
  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;

  quantity: number;

  category : IProductCategory;

}
export class CardItem implements ICardItem {
  id: string;
  imageUrl: string;
  name: string;
  quantity: number;
  unitPrice: number;

  category : IProductCategory;



  // constructor(product: IProduct){
  // constructor(id: string, imageUrl: string, name: string, quantity: number, unitPrice: number) {
  //   this.id = id;
  //   this.imageUrl = imageUrl;
  //   this.name = name;
  //   this.quantity = quantity;
  //   this.unitPrice = unitPrice;
  // }
  constructor(product: IProduct){
    this.id = product.id.toString();
    // todo: fix later
    this.imageUrl = product.images[0];
    this.name = product.name;
    // this.quantity = product.stockQuantity;
    this.quantity = 1;
    this.unitPrice = product.price;

    this.category = product.category;
  }
}
