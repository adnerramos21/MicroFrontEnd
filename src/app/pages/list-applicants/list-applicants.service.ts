import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListApplicantsService {

  constructor(private http: HttpClient) { }

  getData() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    this.http.get('http://localhost:3000/test', {headers}).subscribe(val => {
      console.log(val);
    });
  }
}
