import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private headers: HttpHeaders = new HttpHeaders();
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getInfoBoxData(): Observable<any> {
    const header = this.headers.append('Accept', 'application/json');
    return this.http.get(this.url + 'infobox', { headers: header });
  }

  getTopApplicantsData(): Observable<any> {
    const header = this.headers.append('Accept', 'application/json');
    return this.http.get(this.url + 'topapplicants', { headers: header });
  }
}

export interface IDashboardService {
  getInfoBoxData(): Observable<any>;
  getTopApplicantsData(): Observable<any>;
}

