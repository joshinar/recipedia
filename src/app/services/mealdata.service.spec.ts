import { TestBed } from '@angular/core/testing';

import { MealdataService } from './mealdata.service';

describe('MealdataService', () => {
  let service: MealdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
