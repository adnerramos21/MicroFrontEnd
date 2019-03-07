import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListApplicantsService {

  private headers: HttpHeaders = new HttpHeaders();
  private url = '';
  // 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const header = this.headers.append('Accept', 'application/json');
    return this.http.get(this.url + '/listofapplicants', {headers: header});
  }
}
