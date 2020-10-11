import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpHeaders, HttpRequest, HttpEvent

@Injectable({
  providedIn: 'root'
})
export class GetFilesMetadataService {
  private baseUrl = 'http://localhost:3000/api/data-storage';

  constructor(private httpClient: HttpClient) { }

  getFilesMetaData() {
    return this.httpClient.get<any>(`${ this.baseUrl }/meta-data-content`);
  }
}
