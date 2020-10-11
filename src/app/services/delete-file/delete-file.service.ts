import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { FileMetaData } from '../../components/files-metadata/file-metadata';

@Injectable({
  providedIn: 'root'
})
export class DeleteFileService {
  private baseUrl = environment.API_URL;
  private deleteFileUrl = environment.API_POST.delete_uploaded_file;
  private deleteAllFilesUrl = environment.API_POST.delete_all_uploaded_files;

  private fileDeletedSource = new Subject<any>();
  private allFilesDeletedSource = new Subject<any>();
  //private multipleFilesDeletedSource = new Subject<any>();

  fileDeleted$ = this.fileDeletedSource.asObservable();
  allFilesDeleted$ = this.allFilesDeletedSource.asObservable();
  //multipleFilesDeleted$ = this.multipleFilesDeletedSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  deleteFile(id: any) {
    return this.httpClient.post<any>(`${ this.baseUrl + this.deleteFileUrl + id }`, { })
      .pipe(
        tap(
          res => {
          this.fileDeletedSource.next(res);
        },
          err => {
            this.fileDeletedSource.next(err);
          }));
  }

  deleteAll() {
    return this.httpClient.post<any>(`${ this.baseUrl + this.deleteAllFilesUrl }`, { })
      .pipe(
        tap(res => {
          this.allFilesDeletedSource.next(res);
        },
        err => {
          this.allFilesDeletedSource.next(err);
        }
      ));
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
