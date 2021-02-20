import { TestBed } from '@angular/core/testing';

import { GoogleMapsAngularService } from './google-maps-angular.service';

describe('GoogleMapsAngularService', () => {
  let service: GoogleMapsAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleMapsAngularService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
