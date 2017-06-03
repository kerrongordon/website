import { TestBed, inject } from '@angular/core/testing';

import { LocalforageService } from './localforage.service';

describe('LocalforageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalforageService]
    });
  });

  it('should be created', inject([LocalforageService], (service: LocalforageService) => {
    expect(service).toBeTruthy();
  }));
});
