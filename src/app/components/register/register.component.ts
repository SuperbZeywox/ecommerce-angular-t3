import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Customer, ICustomer} from '../../models/customer.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit{

  user: ICustomer = new Customer();
  faUser = faUserCircle;
  errorMessage: string = "";

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {}

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue?.id) {
      this.router.navigate(["/profile"]);
      return;
    }
  }

  register() {
    this.authenticationService.register(this.user).subscribe(
      data => {this.router.navigate(["/login"]);},
      err => {
        if (err?.status === 409) {
          this.errorMessage = "Username already exist";
        } else {
          this.errorMessage = "Unexpected error occurred. Error is: " + err?.errorMessage;
          console.log(err);
        }}

    );
  }
}
