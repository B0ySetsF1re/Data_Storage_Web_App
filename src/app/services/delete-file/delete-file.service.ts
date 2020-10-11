import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FileMetaData } from '../../components/files-metadata/file-metadata';

@Injectable({
  providedIn: 'root'
})
export class DeleteFileService {
  private baseUrl = 'http://localhost:3000/api/data-storage/';
  private deleteFileUrl = 'delete-uploaded-file/';
  private deleteAllFilesUrl = 'delete-all-uploaded-files';

  constructor(private httpClient: HttpClient) { }

  deleteFile(id: any) {
    return this.httpClient.post<any>(`${ this.baseUrl + this.deleteFileUrl + id }`, { });
  }

  deleteAll() {
    return this.httpClient.post<any>(`${ this.baseUrl + this.deleteAllFilesUrl }`, { });
  }

  deleteMultiple(ids: Array<any>) {
    ids.forEach((id) => {
      this.httpClient.post<any>(`${ this.baseUrl + this.deleteFileUrl + id }`, { } )
        .subscribe(
          res => {
            /* *** */
          },
          err => {
            return err;
          }
        )
    });

    return { 'Success': 'File(s) have been deleted...' };
  }
}
