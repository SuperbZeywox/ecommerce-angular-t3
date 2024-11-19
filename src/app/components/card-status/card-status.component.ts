import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrl: './card-status.component.css',
  // encapsulation: ViewEncapsulation.Emulated
  encapsulation: ViewEncapsulation.None
})
export class CardStatusComponent implements OnInit{

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CardService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => {
        // console.log("card status")
        this.totalPrice = data
      }
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

  }

}
