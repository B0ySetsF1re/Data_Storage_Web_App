import { TestBed } from '@angular/core/testing';

import { RenameFileService } from './rename-file.service';

describe('RenameFileService', () => {
  let service: RenameFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenameFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
