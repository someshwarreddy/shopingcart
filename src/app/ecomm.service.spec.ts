import { TestBed } from '@angular/core/testing';

import { ecommService } from './ecomm.service';

describe('ecommService', () => {
  let service: ecommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ecommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
