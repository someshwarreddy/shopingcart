import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ecommService } from '../ecomm.service';
import { ecommApiActions } from '../store/ecomm.actions';
import { selectecomm } from '../store/ecomm.selectors';
import { Store } from '@ngrx/store';
import { ecomm } from '../ecomm.model';
import { Observable } from 'rxjs';
import { MenuComponent } from '../menu/menu.component';
import { SearchtermService } from '../datashare/searchterm.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Observable<ecomm[]>;
  searchTerm: string;
  constructor(private ecommService: ecommService, private store: Store, private SearchtermService: SearchtermService) {
    this.products = this.store.select(selectecomm);
  }

  ngOnInit() {
    this.ecommService.getProducts().subscribe((ecomm) => {
      this.store.dispatch(ecommApiActions.ecommList({ ecomm }))
    })
    this.SearchtermService.selectedsearchterm$.subscribe((value) => {
      if (value.length > 0) { this.searchTerm = value; }
    })
  }

 


}
