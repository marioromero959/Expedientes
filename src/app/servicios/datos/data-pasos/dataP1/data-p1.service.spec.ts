import { TestBed } from '@angular/core/testing';

import { DataP1Service } from './data-p1.service';

describe('DataP1Service', () => {
  let service: DataP1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataP1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
