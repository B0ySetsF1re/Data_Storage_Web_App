import { Component, OnInit } from '@angular/core';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { FilesStatsService } from '../../services/files-stats/files-stats.service';

@Component({
  selector: 'app-files-stats',
  templateUrl: './files-stats.component.html',
  styleUrls: ['./files-stats.component.css'],
  providers: [FilesStatsService]
})
export class FilesStatsComponent implements OnInit {
  filesStatsContent: Object;
  totalContentSize: string;

  constructor(private filesStatsService: FilesStatsService) {
    this.getFilesStats();
  }

  ngOnInit(): void { }

  getFilesStats() {
    this.filesStatsService.getFilesStats()
      .subscribe(
        res => {
          let objSrc = res;

          this.totalContentSize = objSrc.total_content_size;
          delete objSrc.total_content_size;

          this.filesStatsContent = new Object(objSrc);
        },
        err => {
          console.log(err);
        }
      )
  }

}
