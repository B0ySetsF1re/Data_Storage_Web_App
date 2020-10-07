import { Component } from '@angular/core';
import { Directive, HostListener } from '@angular/core';

@Component({
  selector: 'upload-file',
  templateUrl: './upload_file.component.html',
  styleUrls: ['./upload_file.component.css']
})
export class UploadFileComponent {
  title = '';

  @HostListener("click", ["$event"])
  uploadFile(event: any) {
    //event.stopPropagation();
    event.preventDefault();
    console.log('Submitted');

    //return false;
  }
}
