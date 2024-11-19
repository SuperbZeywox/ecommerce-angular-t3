import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {GetResponseProducts, ProductService} from '../../services/product.service';
import {ProductService} from '../../services/product.service';
import {CardService} from '../../services/card.service';
import {ActivatedRoute, ParamMap, Params, Router, UrlSegment} from '@angular/router';
import {IProduct} from '../../models/product.model';
import {CardItem, ICardItem} from '../../models/cardItem.model';
import {data} from 'jquery';
import {IProductCategory, ProductCategory} from '../../models/product-category.model';
import {Phone} from '../../models/phone.model';
import {Desktop} from '../../models/desktop.model';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  map,
  of,
  switchMap,
  withLatestFrom
} from 'rxjs';
import {SearchGroup1} from '../../models/search_group1.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductListComponent implements OnInit {
  protected readonly Array = Array;

  products: Array<IProduct | Desktop | Phone> = [];

  categoryPresence = false; // for case without categoryId
  currentCategory: IProductCategory = new ProductCategory(1, "")
  thePageNumber: number = 1;
  thePageSize: number = 5;


  constructor(private productService: ProductService,
              private cartService: CardService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    combineLatest([
      // this.route.paramMap.pipe(distinctUntilChanged()),
      this.route.paramMap.pipe(distinctUntilChanged()),
      this.route.queryParams.pipe(distinctUntilChanged()),
    ])
      .pipe(
      switchMap(([paramMap, queryParamMap]) => {
        // Fetch data logic
        if (paramMap.has("keyword")) {
          let keyword = paramMap.get("keyword");
          let categoryName = queryParamMap['categoryName'];
          if (categoryName) {
            return this.productService
              .searchProductsSpecificCategory(this.thePageNumber - 1, this.thePageSize, keyword!, categoryName);
          } else {
            return this.productService
              // .searchProductsGroup1(this.thePageNumber - 1, this.thePageSize, keyword!)
              .searchProductsGroup1(this.thePageNumber - 1, this.thePageSize, keyword!)
              .pipe(map(group1 => [...group1.Desktop,...group1.Phone]))
          }
        // } else if (paramMap.has("categoryId")) {
        } else if (paramMap.has("categoryId") ) {
          this.currentCategory.id = +this.route.snapshot.paramMap.get('categoryId')!;
          return this.productService.getProductList(this.thePageNumber - 1,
            this.thePageSize,
            this.currentCategory.id);
        }
        // todo: once making home component, remove this predicate
        else if (this.urlPredicate()) {
          return this.productService.getProductList(this.thePageNumber - 1,
            this.thePageSize,
            this.currentCategory.id);
        } else {
          return of([]);
        }
      })
    ).subscribe(data => {
      // console.log(data)
      this.products = data;
    });
  }

  urlPredicate():boolean {
    let url = this.router.url;
    if (url === "/" || url === '/product-list') {
      return true;
    } else {
      return false;
    }
  }

  addToCart(theProduct: IProduct) {

    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.price}`);

    // TODO ... do the real work
    const theCartItem = new CardItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }


}
