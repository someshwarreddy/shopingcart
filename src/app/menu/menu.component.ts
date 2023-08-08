import {
  AfterContentChecked, AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges
} from '@angular/core';
import { SearchtermService } from '../datashare/searchterm.service';
import { CartserviceService } from '../cartservice.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit {
  searchTerm: string;
  public cartCount: number = 0;
  isLoggin: boolean = false;
  constructor(
    private SearchtermService: SearchtermService,
    private authService: AuthService,
    private cartService: CartserviceService,
    private router: Router
  ) {

  }


  ngAfterViewInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.cartCount = res.length;
        this.cartService.isCount = res.length;
      })
    this.authService.isLoggedin.subscribe(res => {
      this.isLoggin = res;
    })
  }

  onChangeEvent(event: any) {
    this.searchTerm = event.target.value;
    console.log(this.searchTerm)
    this.SearchtermService.setSearchterm(this.searchTerm)
  }
  goToCart() {
    this.cartCount = 0;
    this.router.navigate(['cart']);
  }

  logout() {
    this.authService.logout();

  }
}
