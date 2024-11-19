import {Component, OnInit, ViewEncapsulation, LOCALE_ID, AfterViewInit} from '@angular/core';
import {CardItem} from '../../models/cardItem.model';
import {CardService} from '../../services/card.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class CardDetailsComponent implements OnInit, AfterViewInit {


  cartItems: CardItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CardService, private router: Router) {

  }

  ngOnInit(): void {
    this.listCartDetails();
  }

  ngAfterViewInit(): void {
    console.log(this.cartItems)
  }


  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );


    // compute cart total price and quantity
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CardItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CardItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CardItem) {
    this.cartService.remove(theCartItem);
  }

  onNavigate() {
    this.router.navigate(['/checkout'])
  }
}
