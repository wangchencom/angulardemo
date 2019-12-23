import { TestBed } from '@angular/core/testing';

import { MyserveService } from './myserve.service';

describe('MyserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyserveService = TestBed.get(MyserveService);
    expect(service).toBeTruthy();
  });
});
