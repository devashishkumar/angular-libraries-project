import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSaverAngularComponent } from './file-saver-angular.component';

describe('FileSaverAngularComponent', () => {
  let component: FileSaverAngularComponent;
  let fixture: ComponentFixture<FileSaverAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSaverAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSaverAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
