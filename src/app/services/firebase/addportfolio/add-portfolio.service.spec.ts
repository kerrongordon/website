import { TestBed, inject } from '@angular/core/testing';

import { AddPortfolioService } from './add-portfolio.service';

describe('AddPortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPortfolioService]
    });
  });

  it('should be created', inject([AddPortfolioService], (service: AddPortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
