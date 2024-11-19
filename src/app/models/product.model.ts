import {IProductCategory} from './product-category.model';

export interface IProduct {
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
}

export class Product implements IProduct {
  Warranty: string;
  availabilityRegions: string;
  createdDate: Date;
  deliveryOptions: string;
  description: string;
  discountPrice: number;
  discountRate: number;
  id: number;
  images: Array<string>;
  name: string;
  price: number;
  promoGift: string;
  stockQuantity: number;
  updatedDate: Date;

  category: IProductCategory;

  // private static create(): IProduct {
    // return new Product("","",new Date(),"","",""
    // ,0,);
  // }


  constructor(Warranty: string, availabilityRegions: string, createdDate: Date, deliveryOptions: string,
              description: string, discountPrice: number, discountRate: number, id: number,
              images: Array<string>, name: string, price: number, promoGift: string, stockQuantity: number,
              updatedDate: Date,category: IProductCategory)
  {
    this.Warranty = Warranty;
    this.availabilityRegions = availabilityRegions;
    this.createdDate = createdDate;
    this.deliveryOptions = deliveryOptions;
    this.description = description;
    this.discountPrice = discountPrice;
    this.discountRate = discountRate;
    this.id = id;
    this.images = images;
    this.name = name;
    this.price = price;
    this.promoGift = promoGift;
    this.stockQuantity = stockQuantity;
    this.updatedDate = updatedDate;
    this.category = category;
  }

}


