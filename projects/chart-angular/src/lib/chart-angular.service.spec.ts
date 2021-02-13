import { TestBed } from '@angular/core/testing';

import { ChartAngularService } from './chart-angular.service';

describe('ChartAngularService', () => {
  let service: ChartAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
