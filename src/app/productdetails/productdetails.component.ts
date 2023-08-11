
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ecommService } from '../ecomm.service';
import { ecomm } from '../ecomm.model';
import { CartserviceService } from '../cartservice.service';
import { Store } from '@ngrx/store';
import { ecommApiActions } from '../store/ecomm.actions';
import { selectecomm } from '../store/ecomm.selectors';
import { Observable, take } from 'rxjs';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  product: any
  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private ecommService: ecommService,
    private cartService: CartserviceService) {
    this.store.select(selectecomm).pipe(take(1))
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ecommService.getProduct(id).subscribe((ecomm) => {
      this.product = ecomm;
      this.store.dispatch(ecommApiActions.ecommList({ ecomm }))
    })
  }

  addTocart(productcart: any) {
    let pair = { quantity: "1" };
    productcart = { ...productcart, ...pair };
    this.cartService.addToCart(productcart);
    window.alert('Your product has been added to the cart!')
    // this.router.navigate(['cart']);
  }
}