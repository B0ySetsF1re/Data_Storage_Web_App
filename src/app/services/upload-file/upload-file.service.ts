import { Injectable, Output, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'; // HttpHeaders, HttpRequest, HttpEvent
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class UploadFileService {
  private baseUrl = 'http://localhost:3000/api/data-storage';
  private fileUploadedSource = new Subject<any>(); // Observable source of any type

  fileUploaded$ = this.fileUploadedSource.asObservable(); // Observable stream of any type

  constructor(private httpClient: HttpClient) { };

  uploadFile(formData: FormData) { // : Observable<HttpEvent<any>>
    // this.fileUploadedSource.next();
    return this.httpClient.post<any>(`${ this.baseUrl }/upload-file`, formData)
      .pipe(
        tap(() => {
          this.fileUploadedSource.next();
        })
      );
  }
}
