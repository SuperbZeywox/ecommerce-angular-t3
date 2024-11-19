import {IProduct} from './product.model';
import {IProductCategory} from './product-category.model';


export interface IPhone extends IProduct {

  storageCapacity: string;

}

export class Phone implements IPhone {

  id : number;
  name: string
  description: string
  promoGift: string
  discountRate: number;
  price: number;
  discountPrice: number;
  stockQuantity: number;
  deliveryOptions: string;
  availabilityRegions: string;
  images: Array<string>;
  Warranty:string;
  createdDate: Date;
  updatedDate: Date;
  category : IProductCategory;

  storageCapacity: string;


  constructor(id: number, name: string, description: string, promoGift: string, discountRate: number, price: number, discountPrice: number, stockQuantity: number, deliveryOptions: string, availabilityRegions: string, images: Array<string>, Warranty: string, createdDate: Date, updatedDate: Date, category: IProductCategory, storageCapacity: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.promoGift = promoGift;
    this.discountRate = discountRate;
    this.price = price;
    this.discountPrice = discountPrice;
    this.stockQuantity = stockQuantity;
    this.deliveryOptions = deliveryOptions;
    this.availabilityRegions = availabilityRegions;
    this.images = images;
    this.Warranty = Warranty;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.category = category;
    this.storageCapacity = storageCapacity;
  }
}


