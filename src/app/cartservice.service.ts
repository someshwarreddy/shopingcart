import { Injectable } from '@angular/core';
import { ecomm, cart } from './ecomm.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  public count: number = 1;
  public isCount: number;
  public productList = new BehaviorSubject<any>([]);
  items: ecomm[] = [];
  /* . . . */

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  addToCart(product: ecomm) {
    this.items.push(product);
    this.productList.next(this.items);
    this.getTotal()
  }

  getItems() {
    return this.items;
  }
  getTotal(): number {
    let total = 0;
    this.items.map((a: any) => {
      console.log(a)
      total += a.price;

    })
    console.log(total)
    return total;
  }

  increment() {
    this.count++

    return this.count;
  }
  decrement() {
    this.count--;
    return this.count;
  }
}
