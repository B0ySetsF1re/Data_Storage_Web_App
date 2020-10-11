import { Component, OnInit } from '@angular/core';
import { Directive, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UploadFileService } from '../../services/upload-file/upload-file.service';
import { DeleteFileService } from '../../services/delete-file/delete-file.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit, AfterViewInit {
  title = '';
  uploadForm: FormGroup;
  msg = '';
  uploadFileLabel = "Choose file...";
  uploadInProgress = false;
  uploadFileSuccessMsg = false;

  constructor(
    private formBuilder: FormBuilder,
    private uploadFileService: UploadFileService,
    private deleteFileService: DeleteFileService
  ) {
    this.deleteFileService.fileDeleted$
      .subscribe(() => {
        this.uploadFileSuccessMsg = true;
        this.msg = 'File has been deleted sucessfully...'
      });
  };

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      upload: ['']
    });
  }

  @ViewChild('fileUploadLabel') fileUploadLabel: ElementRef;

  ngAfterViewInit(){
    //console.log(this.fileUploadLabel);
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

    if(this.uploadFileSuccessMsg == true) {
      this.uploadFileSuccessMsg = false;
    }

    const formData = new FormData();

    formData.append('file', this.uploadForm.get('upload').value);

    this.uploadFileService.uploadFile(formData)
      .subscribe(
        res => {
          this.uploadInProgress = false;
          this.uploadFileSuccessMsg = true;
          this.fileUploadLabel.nativeElement.innerHTML = 'Choose file...';
          this.uploadForm.get('upload').setValue('');
          this.msg = res.Success;
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
