import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FileMetaData } from '../../components/files-metadata/file-metadata';

@Injectable({
  providedIn: 'root'
})
export class DeleteFileService {
  private baseUrl = 'http://localhost:3000/api/data-storage/delete-uploaded-file/';

  constructor(private httpClient: HttpClient) { }

  deleteFile(id: any) {
    return this.httpClient.post<any>(`${this.baseUrl}${id}`, { });
  }

  deleteAll(filesMetaData: FileMetaData[]) {

    filesMetaData.forEach((fileMetaData) => {
      this.httpClient.post<any>(`${this.baseUrl}${fileMetaData.object_id}`, {})
        .subscribe(
          res => {
            /* *** */
          },
          err => {
            return err;
          }
        )
    });

    return { 'Success': 'Files have been deleted...' };
  }
}
