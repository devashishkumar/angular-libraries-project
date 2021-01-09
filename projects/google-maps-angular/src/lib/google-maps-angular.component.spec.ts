import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsAngularComponent } from './google-maps-angular.component';

describe('GoogleMapsAngularComponent', () => {
  let component: GoogleMapsAngularComponent;
  let fixture: ComponentFixture<GoogleMapsAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapsAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
