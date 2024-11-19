import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {HomeComponent} from './components/home/home.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {CardDetailsComponent} from './components/card-details/card-details.component';
import {C2cb1Container} from './containers/c2cb1/c2cb1.container';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from './components/guards/auth.gard';
import {Role} from './data/role.enum';
import {C1g15Container} from './containers/c1g15/c1g15.container';

const routes: Routes = [
  // {path: "", component: HomeComponent},
  {path: "", component: ProductListComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]
    , data: {roles: [Role.ADMIN, Role.USER,Role.SYSTEM_MANAGER]} },

  // {path: "product-list/:id", component: ProductListComponent},
  // {path: "c1g15", component: C1g15Container},
  // {path: "c2cb1", component: C2cb1Container},
  {path: "product-list/:categoryId", component: ProductListComponent},
  {path: "product-list", component: ProductListComponent},
  {path: "product-list/:categoryId/:productId", component: ProductDetailsComponent},

  {path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard]
    , data: {roles: [Role.ADMIN, Role.USER,Role.SYSTEM_MANAGER]}},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'card-details', component: CardDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}





