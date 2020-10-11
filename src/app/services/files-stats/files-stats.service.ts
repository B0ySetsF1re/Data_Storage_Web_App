import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesStatsService {
  private baseUrl = 'http://localhost:3000/api/data-storage/files-stats';

  constructor(private httpClient: HttpClient) { }

  getFilesStats() {
    return this.httpClient.get<any>(`${ this.baseUrl }`, { });
  }
}
