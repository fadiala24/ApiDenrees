import { TestBed } from '@angular/core/testing';

import { ServiceAccueilService } from './service-accueil.service';

describe('ServiceAccueilService', () => {
  let service: ServiceAccueilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAccueilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
