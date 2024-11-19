import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from '../authentication.service';
import {Customer, ICustomer} from '../../models/customer.model';


@Injectable({
  providedIn: 'root'
})
export class RequestBaseService {

  protected currentUser: ICustomer = new Customer();

  constructor(protected authenticationService: AuthenticationService,
              protected http: HttpClient) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  get getHeaders(): HttpHeaders {
    return new HttpHeaders({
      authorization: "Bearer " + this.currentUser?.token,
      "Content-Type": "application/json; charset=UTF-8"
    });

  }

}
