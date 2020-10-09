import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

import { GetFilesMetadataService } from '../../services/get-files-metadata/get-files-metadata.service';
import { DeleteFileService } from '../../services/delete-file/delete-file.service';
import { FileMetaData } from './file-metadata';

@Component({
  selector: 'app-files-metadata',
  templateUrl: './files-metadata.component.html',
  styleUrls: ['./files-metadata.component.css'],
  providers: [GetFilesMetadataService]
})
export class FilesMetadataComponent implements OnInit {
  filesMetaData: FileMetaData[];
  downloadFileBaseUrl = 'http://localhost:3000/api/data-storage/download-file/';

  constructor(
    private getFilesMetaDataService: GetFilesMetadataService,
    private deleteFileService: DeleteFileService,
    private formBuilder: FormBuilder) {
      this.addFilesMetaData();
  }

  ngOnInit(): void { }

  addFilesMetaData() {
    this.getFilesMetaDataService.getFilesMetaData()
      .subscribe(
        res => {
          this.filesMetaData = res;
          // console.log(res);
          // console.log(this.filesMetaData);
        },
        err => {
          console.log(err);
        }
      );
  }

  deleteFile(event: any) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    this.deleteFileService.deleteFile(value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

      location.reload();

  }

  deleteAll(event: any) {
    console.log(this.deleteFileService.deleteAll(this.filesMetaData));
    location.reload();
  }

}
