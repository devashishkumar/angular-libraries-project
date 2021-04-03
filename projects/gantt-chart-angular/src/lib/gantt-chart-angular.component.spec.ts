import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttChartAngularComponent } from './gantt-chart-angular.component';

describe('GanttChartAngularComponent', () => {
  let component: GanttChartAngularComponent;
  let fixture: ComponentFixture<GanttChartAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttChartAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttChartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
