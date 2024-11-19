import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductCategory} from '../../models/product-category.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductCategoryMenuComponent implements OnInit{

  productCategories!: ProductCategory[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getAllCtegories().subscribe(
      data => {
        this.productCategories = data;
      }
    );
  }

}
