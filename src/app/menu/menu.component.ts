import { Component, OnChanges, OnInit } from '@angular/core';
import { SearchtermService } from '../datashare/searchterm.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  searchTerm: string;
  constructor(private SearchtermService: SearchtermService) {

  }

  onChangeEvent(event: any) {
    this.searchTerm = event.target.value;
    console.log(this.searchTerm)
    this.SearchtermService.setSearchterm(this.searchTerm)
  }

}
