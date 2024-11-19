import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {CardService} from '../../services/card.service';
import {CardItem} from '../../models/cardItem.model';
import {IProduct, Product} from '../../models/product.model';
import {IProductCategory, ProductCategory} from '../../models/product-category.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductDetailsComponent implements OnInit, AfterViewInit,OnDestroy{

  product: IProduct= new Product("","",new Date(),"","",
    0,0,0,[],"",0,"",0,
    new Date(),new ProductCategory(1,"Desktop"));

  constructor(private productService: ProductService,
              private cartService: CardService,
              private route: ActivatedRoute,
              private location:Location
  ) {

  }

  currentCategory: IProductCategory = new ProductCategory(1,"");
  categories: Record<number,IProductCategory> = {};
  back = () => {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.productService.getAllCtegories().subscribe(data => {
        const categoryId: number = +this.route.snapshot.paramMap.get('categoryId')!; // id is categoryId
        this.currentCategory.id = categoryId;
        let categoryName1 = data.find(category => category.id == categoryId)?.categoryName;
        if (categoryName1 != undefined) {
          this.currentCategory.categoryName = categoryName1;
          this.handleProductDetails(this.currentCategory);
        }
      });
    });
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    // this.product
  }


  handleProductDetails(category: IProductCategory): void {
    const theProductId: number = +this.route.snapshot.paramMap.get('productId')!;
    this.productService.getProduct(category ,theProductId).subscribe(product => {
      this.product=product
    })
  }

  addToCart() {

    console.log(`Adding to cart: ${this.product.name}, ${this.product.price}`);
    const theCartItem = new CardItem(this.product);
    this.cartService.addToCart(theCartItem);
  }


}
