import { TestBed } from '@angular/core/testing';

import { FileUploadAngularService } from './file-upload-angular.service';

describe('FileUploadAngularService', () => {
  let service: FileUploadAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
