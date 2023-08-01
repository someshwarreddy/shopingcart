import { TestBed } from '@angular/core/testing';

import { SearchtermService } from './searchterm.service';

describe('SearchtermService', () => {
  let service: SearchtermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchtermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
