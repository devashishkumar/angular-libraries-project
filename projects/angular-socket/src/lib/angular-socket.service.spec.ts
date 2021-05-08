import { TestBed } from '@angular/core/testing';

import { AngularSocketService } from './angular-socket.service';

describe('AngularSocketService', () => {
  let service: AngularSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
