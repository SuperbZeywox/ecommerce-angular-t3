import {IProduct} from './product.model';
import {IProductCategory} from './product-category.model';

export interface IDesktop extends IProduct {

  processor:string;
  graphicsCard:string;
  operatingSystem:string;
  storageCapacity:string;
  ramSize:string;

}

export class Desktop implements IDesktop {
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

  processor:string;
  graphicsCard:string;
  operatingSystem:string;
  storageCapacity:string;
  ramSize:string;
  category: IProductCategory;



  constructor(id: number, name: string, description: string, promoGift: string, discountRate: number, price: number,
              discountPrice: number, stockQuantity: number, deliveryOptions: string, availabilityRegions: string,
              images: Array<string>, Warranty: string, createdDate: Date, updatedDate: Date, processor: string,
              graphicsCard: string, operatingSystem: string, storageCapacity: string, ramSize: string, category:IProductCategory) {
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
    this.processor = processor;
    this.graphicsCard = graphicsCard;
    this.operatingSystem = operatingSystem;
    this.storageCapacity = storageCapacity;
    this.ramSize = ramSize;
    this.category = category
  }
}


