import { Injectable } from '@angular/core';
import {Observable, of, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
  ) {

  }

  getDataCached<T>(searchUrl: string, storageName: string, cacheDuration: number): Observable<T> {
    // let countryList = localStorage.getItem(storageName);
    let countryList = this.localStorageService.getItem(storageName);
    if (countryList) {
      // return of(JSON.parse(countryList));
      return of(countryList);
    } else {
      return this.httpClient.get<T>(searchUrl)
        .pipe(
          tap(data => {
            this.localStorageService.saveItem(storageName, data, cacheDuration)
          })
        );
    }
  }




  postDataCached<T,V>(searchUrl: string, storageName: string, dto:T): Observable<V> {
    let countryList = localStorage.getItem(storageName);
    if (countryList) {
      return of(JSON.parse(countryList));
    } else {
      return this.httpClient.post<V>(searchUrl,dto)
        .pipe(
          tap(data => {
            localStorage.setItem(storageName, JSON.stringify(data))
          })
        );
    }
  }


}
