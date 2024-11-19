import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
// import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {Customer, ICustomer} from '../models/customer.model';
import {RestData} from '../data/restData';
import {GeneralService} from './general.service';
import {LocalStorageService} from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: Observable<ICustomer>;
  private currentUserSubject: BehaviorSubject<ICustomer>;

  constructor(
    private http: HttpClient,
    private generalService: GeneralService,
    private localStorageService: LocalStorageService,
  ) {
    const storageUser = this.localStorageService.getItem("currentUser") as ICustomer;
    this.currentUserSubject = new BehaviorSubject<ICustomer>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): ICustomer {
    return this.currentUserSubject.value;
  }

  login(user: ICustomer): Observable<any> {
    return this.http.post<any>(RestData.LOGIN, user).pipe(
      map(response => {
        if (response) {
          this.localStorageService.saveItem("currentUser", response,RestData.CACHE_DURATION_AUTH);
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }
  register(user: ICustomer): Observable<any> {
    return this.http.post(RestData.SIGN_UP, user);
  }

  logOut() {
    this.localStorageService.removeItem("currentUser");
    this.currentUserSubject.next(new Customer()); // i need undefined Customer

  }
}
