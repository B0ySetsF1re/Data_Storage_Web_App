import { Component, OnInit, Directive, HostListener } from '@angular/core';

import { GetFilesMetadataService } from '../../services/get-files-metadata/get-files-metadata.service';
import { fileMetaData } from './file-metadata';

@Component({
  selector: 'app-files-metadata',
  templateUrl: './files-metadata.component.html',
  styleUrls: ['./files-metadata.component.css'],
  providers: [GetFilesMetadataService]
})
export class FilesMetadataComponent implements OnInit {
  filesMetaData: fileMetaData[];
  downloadFileBaseUrl = 'http://localhost:3000/api/data-storage/download-file/';

  constructor(private getFilesMetaDataService: GetFilesMetadataService) {
      this.addFilesMetaData();
  }

  ngOnInit(): void { }

  addFilesMetaData() {
    this.getFilesMetaDataService.getFilesMetaData()
      .subscribe(
        res => {
          this.filesMetaData = res;
          //console.log(res);
          console.log(this.filesMetaData);
        },
        err => {
          console.log(err);
        }
      );
  }

}
