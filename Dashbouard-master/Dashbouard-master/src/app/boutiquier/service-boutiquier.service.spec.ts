import { TestBed } from '@angular/core/testing';

import { ServiceBoutiquierService } from './service-boutiquier.service';

describe('ServiceBoutiquierService', () => {
  let service: ServiceBoutiquierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBoutiquierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
