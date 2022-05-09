import { TestBed } from '@angular/core/testing';

import { TokenAnatomyScanService } from './token-anatomy-scan.service';

describe('TokenAnatomyScanService', () => {
  let service: TokenAnatomyScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenAnatomyScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
