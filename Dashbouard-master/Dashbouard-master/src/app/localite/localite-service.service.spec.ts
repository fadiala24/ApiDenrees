import { TestBed } from '@angular/core/testing';

import { LocaliteServiceService } from './localite-service.service';

describe('LocaliteServiceService', () => {
  let service: LocaliteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaliteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
