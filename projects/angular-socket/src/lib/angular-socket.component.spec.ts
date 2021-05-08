import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSocketComponent } from './angular-socket.component';

describe('AngularSocketComponent', () => {
  let component: AngularSocketComponent;
  let fixture: ComponentFixture<AngularSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
