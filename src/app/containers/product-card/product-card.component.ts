import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IProduct} from '../../models/product.model';
import {Desktop} from '../../models/desktop.model';
import {ProductService} from '../../services/product.service';
import {CardService} from '../../services/card.service';
import {ActivatedRoute} from '@angular/router';
import {CardItem} from '../../models/cardItem.model';
import {style} from '@angular/animations';
interface IPriceRange{
  categoryName: string,
  description: string
  iconName: string,
  className: string
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductCardComponent implements AfterViewInit {

  @Input() categoryPresence!: boolean;

  constructor(private cardService:CardService) {
  }

  @Input() product!: IProduct;
  icons:string [] = [
    "top.svg",
    "neo.svg",
    "made-in-czech-rep.svg",
    "icon-repayment-2.svg",
  ]
  price_category: IPriceRange[] = [
    {categoryName:"Premium Range",description: "Uncompromising quality",iconName: "best.svg",className:"best"},
    {categoryName:"Deluxe Range",description: "Good price/performance ratio",iconName: "better.svg",className:"better"},
    {categoryName:"Classic Range",description: "Inexpensive yet highly rated",iconName: "good.svg",className:"good"}
  ]
  categoryIndex = 2;
  myCategory = this.price_category[this.categoryIndex]

  ngAfterViewInit(): void {
  }

  routerPrediate(categoryId: number,productId:number):string {
    return this.categoryPresence ? `${productId}` : `/product-list/${categoryId}/${productId}`
  }


//   **************
  addToCart(theProduct: IProduct) {

    const theCartItem = new CardItem(theProduct);

    this.cardService.addToCart(theCartItem);
  }


  protected readonly style = style;
}
