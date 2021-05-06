import { TestBed } from '@angular/core/testing';

import { RulingsServiceService } from './rulings-service.service';

describe('RulingsServiceService', () => {
  let service: RulingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
