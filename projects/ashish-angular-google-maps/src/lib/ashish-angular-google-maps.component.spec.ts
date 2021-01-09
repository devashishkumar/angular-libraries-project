import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshishAngularGoogleMapsComponent } from './ashish-angular-google-maps.component';

describe('AshishAngularGoogleMapsComponent', () => {
  let component: AshishAngularGoogleMapsComponent;
  let fixture: ComponentFixture<AshishAngularGoogleMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshishAngularGoogleMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshishAngularGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
