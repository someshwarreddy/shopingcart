import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ecommService } from '../ecomm.service';
import { ecomm } from '../ecomm.model';
import { SearchtermService } from '../datashare/searchterm.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  implements OnInit{
  product:ecomm[];
  searchTerm: string;
  constructor(private route: ActivatedRoute,
    private store: Store,
    private ecommService: ecommService,
    private SearchtermService: SearchtermService,
    ) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ecommService.getCategory(id).subscribe((data: ecomm[]) => {
      this.product = data;
    })
    this.SearchtermService.selectedsearchterm$.subscribe((value) => {
      if (value.length > 0) { this.searchTerm = value; }
    })
  }
}
