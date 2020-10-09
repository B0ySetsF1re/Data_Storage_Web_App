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
  //selectedCheckboxes = [];
  private selectedCheckboxes: Array<any>;
  private downloadFileBaseUrl = 'http://localhost:3000/api/data-storage/download-file/';

  constructor(
    private getFilesMetaDataService: GetFilesMetadataService,
    private deleteFileService: DeleteFileService,
    private formBuilder: FormBuilder) {
      this.addFilesMetaData();
      this.selectedCheckboxes = new Array();
  }

  ngOnInit(): void { }

  onSubmit(filesMetaDataForm: NgForm) {

    console.log(filesMetaDataForm);
  }

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

  collectSelectedFilesToDelete(event: any) {
    if(event.target.checked) {
      this.selectedCheckboxes.push(event.target.attributes.value.nodeValue);
      console.log(this.selectedCheckboxes);
    } else if(!event.target.checked) {
      this.selectedCheckboxes.splice(event.target.attributes.value.nodeValue, 1);
      console.log(this.selectedCheckboxes);
    }
  }

  deleteMultiple(event: any) {
    const res = this.deleteFileService.deleteMultiple(this.selectedCheckboxes);
    location.reload();
  }

}
