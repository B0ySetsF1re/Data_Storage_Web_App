import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

import { UploadFileService } from '../../services/upload-file/upload-file.service';
import { GetFilesMetadataService } from '../../services/get-files-metadata/get-files-metadata.service';
import { DeleteFileService } from '../../services/delete-file/delete-file.service';
import { RenameFileService } from '../../services/rename-file/rename-file.service';
import { FileMetaData } from './file-metadata';

@Component({
  selector: 'app-files-metadata',
  templateUrl: './files-metadata.component.html',
  styleUrls: ['./files-metadata.component.css'],
  providers: [GetFilesMetadataService]
})
export class FilesMetadataComponent implements OnInit {
  filesMetaData: FileMetaData[];

  private downloadFileBaseUrl = 'http://localhost:3000/api/data-storage/download-file/';
  private selectedCheckboxes: Array<any>;
  private selectedFileIdToRename: string;

  constructor(
    private uploadFileService: UploadFileService,
    private getFilesMetaDataService: GetFilesMetadataService,
    private deleteFileService: DeleteFileService,
    private renameFileService: RenameFileService,
    private formBuilder: FormBuilder) {
      this.addFilesMetaData();
      this.selectedCheckboxes = new Array();
      this.uploadFileService.fileUploaded$
        .subscribe(() => {
          this.addFilesMetaData();
        });
      this.deleteFileService.fileDeleted$
        .subscribe(() => {
          this.addFilesMetaData();
        });
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
    /*const target = event.target || event.srcElement || event.currentTarget;*/
    const target = event.target;
    const idAttr = target.attributes.value;
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
  }

  deleteAll(event: any) {
    this.deleteFileService.deleteAll()
      .subscribe(
        res => {
          location.reload();
        },
        err => {
          console.log(err);
        }
      )
  }

  collectSelectedFilesToDelete(event: any) {
    const target = event.target;
    const idAttr = target.attributes.value;
    const value = idAttr.nodeValue;

    if(target.checked) {
      this.selectedCheckboxes.push(value);
      console.log(this.selectedCheckboxes);
    } else if(!event.target.checked) {
      this.selectedCheckboxes.splice(value, 1);
      console.log(this.selectedCheckboxes);
    }
  }

  deleteMultiple(event: any) {
    const res = this.deleteFileService.deleteMultiple(this.selectedCheckboxes);
    if(res.Success) {
      location.reload();
    } else {
      console.log('Thre was an error...');
    }
  }

  getRenamedFileId(event: any) {
    const target = event.target;
    const idAttr = target.attributes.value;
    const value = idAttr.nodeValue;

    this.selectedFileIdToRename = value;
    console.log(this.selectedFileIdToRename);
  }

  renameFileOnSubmit(renameFileForm: NgForm) {
    this.renameFileService.renameFile(this.selectedFileIdToRename, renameFileForm.value)
      .subscribe(
        res => {
          // console.log(res);
          location.reload();
        },
        err => {
          console.log(err);
        }
      );
  }
}
