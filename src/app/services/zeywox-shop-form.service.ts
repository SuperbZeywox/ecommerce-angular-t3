import { Injectable } from '@angular/core';
import {IState, State} from '../models/state.model';
import {ICountry} from '../models/country.model';
import {catchError, Observable, of, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RestData} from '../data/restData';
import {IProduct} from '../models/product.model';
import {GeneralService} from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ZeywoxShopFormService {
  constructor(
    private httpClient: HttpClient,
    private generalService: GeneralService,
  ) { }

  getCountries(): Observable<ICountry[]> {
    return this.generalService.getDataCached<ICountry[]>(RestData.ALL_COUNTRIES,"all_countries",RestData.CACHE_DURATION_COUNTRY)
      .pipe(catchError(err => {
        return of([]);
      }));
  }

  getStates(theCountryCode: string): Observable<IState[]> {
    const searchUrl = `${RestData.CUSTOM_STATE_By_Country}?code=${theCountryCode}`;
    return this.generalService.getDataCached<IState[]>(searchUrl,`${theCountryCode}_states`,RestData.CACHE_DURATION_STATE)
      .pipe(catchError(err => {
        return of([]);
      }));
  }



  getCreditCardMonths(startMonth: number): Observable<number[]> {

    let data: number[] = [];

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {

    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }

    return of(data);
  }
}

