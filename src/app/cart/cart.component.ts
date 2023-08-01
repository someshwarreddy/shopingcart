import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ecommService } from '../ecomm.service';
import { cart } from '../ecomm.model';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CartserviceService } from '../cartservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public count: number;

  public countDisable: boolean = false;
  public total = this.cartService.getTotal()
  public cartItemList = this.cartService.getItems();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private cartService: CartserviceService) {

  }
  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'))
    // const id = localStorage.getItem("id")
    // console.log(localStorage.getItem("id"));
    // this.ecommService.getCart(id).subscribe((data: cart[]) => {
    //   this.cartproduct = data;
    //   console.log(this.cartproduct)
    // })
    // this.ecommService.getProduct(id).subscribe((ecomm) => {
    //   this.cartItemList.push(ecomm);
    //   console.log(this.cartItemList)
    // })

  }

  removeItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
  }
  clearCart() {
    this.cartItemList = []

  }

  increment(price: number) {

    this.cartItemList.map((a: any, index: any) => {
      if (price === a.price) {
        debugger
        this.count = this.cartService.increment()

      }
    })
    if (this.count > 1) {
      this.countDisable = false;
      this.total += price;
    }
  }
  decrement(price: number) {
    this.count = this.cartService.decrement();

    if (this.count === 1) {
      this.countDisable = true;
      this.total -= price;
    }
    else {
      this.total -= price;
    }
  }

}