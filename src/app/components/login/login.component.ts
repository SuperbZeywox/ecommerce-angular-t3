import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {Customer, ICustomer} from '../../models/customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{

  returnUrl: string = '/profile'; // Default redirect route

  // user: User = new User();
  user: ICustomer = new Customer();
  faUser = faUserCircle;
  errorMessage: string = "";

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute,) {}

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue?.id) {
      // console.log(1111)
      console.log(this.authenticationService.currentUserValue);
      // this.router.navigate(["/profile"]);
      this.router.navigate([this.returnUrl]);
      return;
    }
    else {
      this.route.queryParams.subscribe((params) => {
        if (params['returnUrl']) {
          this.returnUrl = params['returnUrl'];
        }
      });
    }
  }

  login() {
    this.authenticationService.login(this.user).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      }, err => {
        this.errorMessage = "Username or password is incorrect.";
        console.log(err);
      }
    )

  }




}
