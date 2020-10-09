import { TestBed } from '@angular/core/testing';

import { FilesStatsService } from './files-stats.service';

describe('FilesStatsService', () => {
  let service: FilesStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
