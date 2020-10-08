import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'; // HttpHeaders, HttpRequest, HttpEvent
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable()
export class UploadFileService {
  private baseUrl = 'http://localhost:3000/api/data-storage';

  constructor(
    private httpClient: HttpClient) { };

  uploadFile(formData: FormData) { // : Observable<HttpEvent<any>>
    return this.httpClient.post<any>(`${this.baseUrl}/upload-file`, formData);
  }

}
