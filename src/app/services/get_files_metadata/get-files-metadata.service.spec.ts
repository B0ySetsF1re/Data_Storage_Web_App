import { TestBed } from '@angular/core/testing';

import { GetFilesMetadataService } from './get-files-metadata.service';

describe('GetFilesMetadataService', () => {
  let service: GetFilesMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFilesMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
