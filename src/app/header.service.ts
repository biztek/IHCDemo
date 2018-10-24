import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private http: HttpClient) { }

  getSearchData(): Observable<any> {
    return this.http.get('../assets/json/searchList.json')
  }
}
