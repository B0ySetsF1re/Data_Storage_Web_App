import { Component, OnInit } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UploadFileService } from '../../services/upload_file/upload_file.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload_file.component.html',
  styleUrls: ['./upload_file.component.css'],
  providers: [UploadFileService]
})
export class UploadFileComponent implements OnInit {
  title = '';
  uploadForm: FormGroup;
  uploadInProgress = false;

  constructor(
    private formBuilder: FormBuilder,
    private uploadFileService: UploadFileService
  ) { };

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      upload: ['']
    });
  }

  //@HostListener("", ["$event"])
  onFileSelect(event: any) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('upload').setValue(file);
    }
  }



  @HostListener("submit", ["$event"])
  uploadFile(event: any) {
    event.preventDefault();
    this.uploadInProgress = true;

    const formData = new FormData();

    formData.append('file', this.uploadForm.get('upload').value);

    this.uploadFileService.uploadFile(formData)
      .subscribe(
        res => {
          this.uploadInProgress = false;
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

    //event.stopPropagation();
    //console.log('Submitted');
    //return false;
  }
}
