import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCardComponent } from './containers/product-card/product-card.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CardStatusComponent } from './components/card-status/card-status.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import {FormsModule} from "@angular/forms";
// **************
import { ReactiveFormsModule } from '@angular/forms';
import { C2cb1Container } from './containers/c2cb1/c2cb1.container';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { C1g15Container } from './containers/c1g15/c1g15.container';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    HomeComponent,
    CardStatusComponent,
    CheckoutComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    CardDetailsComponent,
    C2cb1Container,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MenuBarComponent,
    C1g15Container,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        // FormsModule
      ReactiveFormsModule,
      FormsModule,
      FontAwesomeModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'cs-CZ' } // Set the Czech locale
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
