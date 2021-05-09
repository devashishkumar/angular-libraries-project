import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketIoNgxComponent } from './socket-io-ngx.component';

describe('SocketIoNgxComponent', () => {
  let component: SocketIoNgxComponent;
  let fixture: ComponentFixture<SocketIoNgxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketIoNgxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketIoNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
