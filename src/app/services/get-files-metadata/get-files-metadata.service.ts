import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetFilesMetadataService {
  private baseUrl = environment.API_URL + environment.API_GET.meta_data_content;

  constructor(private httpClient: HttpClient) { }

  getFilesMetaData() {
    return this.httpClient.get<any>(`${ this.baseUrl }`);
  }
}
