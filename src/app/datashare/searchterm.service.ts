import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchtermService {
  private searchterm$ = new BehaviorSubject<any>({});
  selectedsearchterm$ = this.searchterm$.asObservable();
  constructor() {}

  setSearchterm(searchterm: any) {
    this.searchterm$.next(searchterm);
  }
}
