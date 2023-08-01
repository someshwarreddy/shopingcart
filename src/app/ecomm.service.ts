import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ecomm, cart } from './ecomm.model';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ecommService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Array<ecomm>> {
    const API_URL = `https://fakestoreapi.com/products`;
    return this.http.get<ecomm[]>(API_URL)
      .pipe(map((ecomm) => ecomm || []));
  }
  getCategory(Category: string): Observable<Array<ecomm>> {
    const api = `https://fakestoreapi.com/products/category/${Category}`;
    return this.http.get<ecomm[]>(api)
      .pipe(map((ecomm) => ecomm || []));
  }
  getProduct(Id: string): Observable<Array<ecomm>> {
    const api = `https://fakestoreapi.com/products/${Id}`;
    return this.http.get<ecomm[]>(api)
      .pipe(map((ecomm) => ecomm || []));
  }
  getCart(Id: string): Observable<Array<cart>> {
    const api = `https://fakestoreapi.com/carts/${Id}`;
    return this.http.get<cart[]>(api)
      .pipe(map((ecomm) => ecomm || []));
  }
}
