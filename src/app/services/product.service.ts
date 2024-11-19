import {Injectable, OnInit} from '@angular/core';

import {BehaviorSubject, catchError, combineLatest, Observable, of, switchMap, tap, throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {IProduct, Product} from '../models/product.model';
import {RestData} from "../data/restData"
import {IProductCategory, ProductCategory} from '../models/product-category.model';
import {GeneralService} from './general.service';
import { SearchGroup1 } from '../models/search_group1.model';
import {LocalStorageService} from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private categoryUrl = RestData.PRODUCT_CATEGORY_LIST;

  constructor(
    private httpClient: HttpClient,
    private generalService: GeneralService,
    private localStorageService: LocalStorageService
  ) {

  }


  getProduct(category: IProductCategory,theProductId: number): Observable<IProduct> {
    const productUrl = `${RestData.HOST}group1/${category.categoryName.toLowerCase()}/${theProductId}`;
    let products = this.localStorageService.getItem(`${category.id}`);
    if (products) {
      let queriedProduct = (products as IProduct[]).find(product => product.id = theProductId);
      if (queriedProduct) {
        return of(queriedProduct);
      }
    }
    let requestedProduct = this.httpClient.get<IProduct>(productUrl);
    if (requestedProduct) {
      // todo: update category data with messaging service
      this.httpClient.get<IProduct[]>(`${RestData.PRODUCT_CATEGORY_Q}?id=${category.id}`)
        .pipe(
          tap(data => {this.localStorageService.saveItem(`${category.id}`, data,RestData.CACHE_DURATION_PL);
          })
        );
    }
    return requestedProduct;
  }

  getProductList(thePage: number
    , thePageSize: number
    , theCategoryId: number): Observable<IProduct[]> {

    const searchUrl = `${RestData.PRODUCT_CATEGORY_Q}?id=${theCategoryId}`
      + `&page=${thePage}&size=${thePageSize}`;
    return this.generalService.getDataCached<IProduct[]>(searchUrl,`${theCategoryId}`,RestData.CACHE_DURATION_PL)
      .pipe(catchError(err => {
      this.handleError(err);
      return of([]);
    }));
  }


  searchProductsGroup1(thePage: number,
                       thePageSize: number,
                       theKeyword: string): Observable<SearchGroup1> {

    const searchUrl = `${RestData.SEARCH_GROUP1}?name=${theKeyword}`;
    return this.httpClient.get<SearchGroup1>(searchUrl);
  }


  searchProductsSpecificCategory(thePage: number,
                                 thePageSize: number,
                                 theKeyword: string, categoryName:string): Observable<IProduct[]> {

    // console.log("searchProductsSpecificCategory")
    const searchUrl = `${RestData.HOST}group1/${categoryName.toLowerCase()}/filter?name=${theKeyword}`;
    return this.httpClient.get<IProduct[]>(searchUrl).pipe(catchError(err => {
      this.handleError(err);
      return of([]);
    }));
  }


  private handleError(error: HttpErrorResponse) {
    // Suppress 404 errors (don't log them to the console)
    if (error.status === 404) {
      return throwError(() => new Error('Not Found'));
    }
    // For other errors, you can log or handle differently
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong'));
  }

  getAllCtegories(): Observable<IProductCategory[]> {
    return this.generalService.getDataCached<IProductCategory[]>(this.categoryUrl,"productCategory",24*60)
  }
}


export interface GetResponseProductCategory {
  productCategory: IProductCategory[];

}

