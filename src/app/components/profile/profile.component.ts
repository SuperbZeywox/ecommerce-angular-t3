import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CheckoutService} from '../../services/checkout.service';
import {ICustomer} from '../../models/customer.model';
import {IOrderHistory} from '../../models/order-history.model';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ProfileComponent implements OnInit{

  // todo: load email from local storage

  email!: string;
  purchasedItemList: IOrderHistory[] = [];


  constructor(
    private checkoutService: CheckoutService,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {

    let item = this.localStorageService.getItem("currentUser");
    if (item!=null) {
      // let user:ICustomer = JSON.parse(item)
      let user:ICustomer = item
      this.email = user.email;
      console.log(this.email);
    }
    this.checkoutService.getAllPurchaseItems(this.email,0,10).subscribe(data => {
      this.purchasedItemList = data.content;
      console.log(this.purchasedItemList);
    });
  }




}
