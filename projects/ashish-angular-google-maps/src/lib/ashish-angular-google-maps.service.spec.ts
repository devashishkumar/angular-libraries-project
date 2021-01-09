import { TestBed } from '@angular/core/testing';

import { AshishAngularGoogleMapsService } from './ashish-angular-google-maps.service';

describe('AshishAngularGoogleMapsService', () => {
  let service: AshishAngularGoogleMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AshishAngularGoogleMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
