import { TestBed } from '@angular/core/testing';

import { GanttChartAngularService } from './gantt-chart-angular.service';

describe('GanttChartAngularService', () => {
  let service: GanttChartAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GanttChartAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
