import { Component, OnInit } from '@angular/core';
import { GetFilesMetadataService } from '../../services/get-files-metadata/get-files-metadata.service';

@Component({
  selector: 'app-files-metadata',
  templateUrl: './files-metadata.component.html',
  styleUrls: ['./files-metadata.component.css'],
  providers: [GetFilesMetadataService]
})
export class FilesMetadataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
