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
  public count: number = 1;
  public total = this.cartService.getTotal()
  public cartItemList = this.cartService.getItems();
  public cartCount: any = [];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private cartService: CartserviceService) {

  }
  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'))

    // this.ecommService.getCart(id).subscribe((data: cart[]) => {
    //   this.cartproduct = data;
    //   
    // })
    // this.ecommService.getProduct(id).subscribe((ecomm) => {
    //   this.cartItemList.push(ecomm);
    //  
    // })

  }

  removeItem(product: any) {
    let confirmRemove = 'Are you sure you want to remove this item from cart?'
    let result = window.confirm(confirmRemove);
    if (result) {
      this.cartItemList.map((a: any, index: any) => {
        if (product.id === a.id) {
          this.cartItemList.splice(index, 1);
        }
      })
      this.total -= product.price * product.quantity;
    }
  }
  clearCart() {
    this.cartItemList = []
  }

  increment(quantity: number, price: number, i: number) {
    this.count = quantity + 1;
    this.cartItemList[i].quantity = this.count;
    if (this.cartItemList[i].quantity === 1) {
      this.count = 1;
    }
    if (this.count > 1) {
      this.total += price;
    }
  }

  decrement(quantity: number, price: number, i: number) {
    this.count = quantity - 1;
    this.cartItemList[i].quantity = this.count;
    if (this.count === 1) {
      this.total -= price;
    }
    else {
      this.total -= price;
    }
  }

}