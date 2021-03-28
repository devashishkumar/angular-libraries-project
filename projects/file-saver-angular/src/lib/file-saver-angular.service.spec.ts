import { TestBed } from '@angular/core/testing';

import { FileSaverAngularService } from './file-saver-angular.service';

describe('FileSaverAngularService', () => {
  let service: FileSaverAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileSaverAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
