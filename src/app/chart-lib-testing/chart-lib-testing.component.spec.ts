import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLibTestingComponent } from './chart-lib-testing.component';

describe('ChartLibTestingComponent', () => {
  let component: ChartLibTestingComponent;
  let fixture: ComponentFixture<ChartLibTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLibTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLibTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
