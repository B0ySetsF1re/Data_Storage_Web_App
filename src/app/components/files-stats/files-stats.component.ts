import { Component, OnInit } from '@angular/core';

import { FilesStatsService } from '../../services/files-stats/files-stats.service';

@Component({
  selector: 'app-files-stats',
  templateUrl: './files-stats.component.html',
  styleUrls: ['./files-stats.component.css'],
  providers: [FilesStatsService]
})
export class FilesStatsComponent implements OnInit {

  constructor(private filesStatsService: FilesStatsService) {
    this.getFilesStats();
  }

  ngOnInit(): void { }

  getFilesStats() {
    this.filesStatsService.getFilesStats()
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }

}
