//import { Directive, HostListener } from '@angular/core';
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UploadFileService {
  constructor(
    private http: HttpClient) { };

  uploadFile() {
    let headers = new HttpHeaders();

    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post('http://localhost:3000/api/data-storage/upload-file', { headers: headers })
      .pipe(map(res => res));
  }

}
