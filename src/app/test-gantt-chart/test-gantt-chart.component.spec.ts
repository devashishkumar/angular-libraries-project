import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGanttChartComponent } from './test-gantt-chart.component';

describe('TestGanttChartComponent', () => {
  let component: TestGanttChartComponent;
  let fixture: ComponentFixture<TestGanttChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGanttChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGanttChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
