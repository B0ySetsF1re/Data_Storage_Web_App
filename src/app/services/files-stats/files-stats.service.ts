import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesStatsService {
  private baseUrl = environment.API_URL + environment.API_GET.files_stats;

  constructor(private httpClient: HttpClient) { }

  getFilesStats() {
    return this.httpClient.get<any>(`${ this.baseUrl }`, { });
  }
}
