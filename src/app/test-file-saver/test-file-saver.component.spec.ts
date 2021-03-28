import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFileSaverComponent } from './test-file-saver.component';

describe('TestFileSaverComponent', () => {
  let component: TestFileSaverComponent;
  let fixture: ComponentFixture<TestFileSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFileSaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFileSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
