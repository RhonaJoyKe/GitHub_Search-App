import { TestBed } from '@angular/core/testing';

import { UsrepodataService } from './usrepodata.service';

describe('UsrepodataService', () => {
  let service: UsrepodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsrepodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
