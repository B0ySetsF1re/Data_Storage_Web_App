import { Component } from '@angular/core';
import { Directive, HostListener } from '@angular/core';

import { UploadFileService } from '../../services/upload_file/upload_file.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload_file.component.html',
  styleUrls: ['./upload_file.component.css'],
  providers: [UploadFileService]
})
export class UploadFileComponent {
  title = '';

  @HostListener("submit", ["$event"])
  uploadFile(event: any) {
    event.preventDefault();
    //event.stopPropagation();

    console.log('Submitted');

    //return false;
  }
}
