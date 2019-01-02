import { TestBed } from '@angular/core/testing';

import { FilterDealsService } from './filter-deals.service';

describe('FilterDealsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterDealsService = TestBed.get(FilterDealsService);
    expect(service).toBeTruthy();
  });
});
