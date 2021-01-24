import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadAngularComponent } from './file-upload-angular.component';

describe('FileUploadAngularComponent', () => {
  let component: FileUploadAngularComponent;
  let fixture: ComponentFixture<FileUploadAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
