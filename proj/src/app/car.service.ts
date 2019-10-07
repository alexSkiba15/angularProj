import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export const REST_URL = new InjectionToken('rest_url');

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = 'http://localhost:8000/cars/';
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) {
    console.log('gete');
  }

  getCars(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cars`);
  }
}
