import { Directive, HostListener } from '@angular/core';
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UploadFileService {
  private baseUrl = 'http://localhost:3000/api/data-storage';

  constructor(
    private http: HttpClient) { };

  uploadFile(file: File) { // : Observable<HttpEvent<any>>
    
  }

}
