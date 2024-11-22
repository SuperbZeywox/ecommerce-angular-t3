import { Injectable } from '@angular/core';
import {catchError, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IPurchase} from '../models/purchase.model';
import {RestData} from '../data/restData';
import {RequestBaseService} from './auth/request-base.service';
import {AuthenticationService} from './authentication.service';
import {IOrder} from '../models/order.model';
import {IPage} from '../models/page.model';
import {IOrderHistory} from '../models/order-history.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService extends RequestBaseService{

  constructor(authService: AuthenticationService, private httpClient: HttpClient) {
    super(authService,httpClient);
  }
  private purchaseUrl = RestData.PURCHASE


  placeOrder(purchase: IPurchase): Observable<any> {
    return this.httpClient.post<IPurchase>(this.purchaseUrl, purchase,{headers: this.getHeaders})
      .pipe(catchError(err => {
        return of(null);
      }));;
  }

  // todo: here inject token instead of email
  getAllPurchaseItems(pageNumber: number,pageSize: number): Observable<any> {
    // return this.http.get<OrdersResponse>(`${RestData.ORDERS}?email=${email}`, {headers: this.getHeaders});
    return this.http.get<OrdersResponse>(`${RestData.ORDERS}`, {headers: this.getHeaders})
      .pipe(catchError(err => {
        return of([]);
      }));
  }
}



interface OrdersResponse {
  content: IOrderHistory[];
  page: IPage
}

