import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAngularComponent } from './chart-angular.component';

describe('ChartAngularComponent', () => {
  let component: ChartAngularComponent;
  let fixture: ComponentFixture<ChartAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
