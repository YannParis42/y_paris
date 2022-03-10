import { TestBed } from '@angular/core/testing';

import { ApiRegionsService } from './api-regions.service';

describe('ApiRegionsService', () => {
  let service: ApiRegionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRegionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
