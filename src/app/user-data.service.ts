import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private data: Object = null;

  constructor(private http: HttpClient) {}

  public getData() { 
    return this.http.get(`${environment.baseUrl}/assets/data.json`);
  }
}