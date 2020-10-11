import { Component } from '@angular/core';
import bsCustomFileInput from 'bs-custom-file-input';

import { UploadFileService } from './services/upload-file/upload-file.service';
import { DeleteFileService } from './services/delete-file/delete-file.service';
import { RenameFileService } from './services/rename-file/rename-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UploadFileService, DeleteFileService, RenameFileService]
})
export class AppComponent {
  title = '';

  ngOnInit(): void {
    bsCustomFileInput.init();
  }
}
