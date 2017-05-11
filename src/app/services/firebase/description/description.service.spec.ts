import { TestBed, inject } from '@angular/core/testing';

import { DescriptionService } from './description.service';

describe('DescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DescriptionService]
    });
  });

  it('should ...', inject([DescriptionService], (service: DescriptionService) => {
    expect(service).toBeTruthy();
  }));
});
