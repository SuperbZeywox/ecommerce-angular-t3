import {AfterViewInit, Component, LOCALE_ID, ViewEncapsulation} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeCs from '@angular/common/locales/cs';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service'; // Import the Czech locale

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'ecommerce-angular-t3';



  constructor(private router: Router, private authenticationService: AuthenticationService) {
    registerLocaleData(localeCs)
  }

  ngAfterViewInit(): void {

  }



}
