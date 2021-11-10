import { TestBed } from '@angular/core/testing';

import { DataSource1AccountService } from './data-source1-account.service';

describe('DataSource1AccountService', () => {
  let service: DataSource1AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSource1AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
