import { TestBed, inject } from '@angular/core/testing';

import { TimestampService } from './timestamp.service';

describe('TimestampService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimestampService]
    });
  });

  it('should be created', inject([TimestampService], (service: TimestampService) => {
    expect(service).toBeTruthy();
  }));
});
