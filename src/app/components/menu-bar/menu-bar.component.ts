import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Customer, ICustomer} from '../../models/customer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {Role} from '../../data/role.enum';
import {IProductCategory, ProductCategory} from '../../models/product-category.model';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
  // encapsulation: ViewEncapsulation.Emulated
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements AfterViewInit{
  title = 'ecommerce-angular-t3';
  currentUser: ICustomer = new Customer();

  // todo: add 10-20 categories, and make this dynamic
  items: IProductCategory[]= [
    new ProductCategory(0,"Desktop"),
    new ProductCategory(1,"Phone"),
  ]


  @ViewChild('mb_d') bd_dropdown!: ElementRef<HTMLDivElement>;
  bd_d_nativeEl!: HTMLDivElement;
  d_isActive: boolean = false;

  category: IProductCategory= new ProductCategory(-1,"All");


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private renderer2: Renderer2,
    private cdr: ChangeDetectorRef,
    private route:ActivatedRoute

  ) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    })
  }

  ngAfterViewInit(): void {
    this.bd_d_nativeEl = this.bd_dropdown.nativeElement
  }

  getCategory(category?:IProductCategory): void {
    if (category == undefined) {
      this.category = new ProductCategory(-1,'All');
    } else {
      this.category = category;
    }
  }

  toggleDropDown() {
    this.d_isActive = !this.d_isActive;
    this.renderer2[this.d_isActive ? 'addClass' : 'removeClass'](this.bd_d_nativeEl,'active')
  }

  isAdmin() {
    return this.currentUser?.role === Role.ADMIN;
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(["/login"]);

  }
  doSearch(value: string) {

    if (this.category.id == -1) {
      let url = `/search/${value}`;
      this.router.navigate([url]);
    } else {
      let url1:string = `/search`;
      // console.log('value: '+value+" ,category: "+this.category.categoryName);
      this.router.navigate([url1,value],{queryParams: {categoryName:this.category.categoryName}});

    }

  }

  protected readonly ProductCategory = ProductCategory;
}
