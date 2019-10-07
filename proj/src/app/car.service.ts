import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from './car';

export const REST_URL = new InjectionToken('rest_url');

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = 'http://localhost:8000/cars';
  private httpHeaders = {headers: new HttpHeaders({'Content-type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/`, this.httpHeaders);
  }

  createCar(car: object): Observable<object> {
    console.log(`${this.baseUrl}/add`, car, this.httpHeaders);
    debugger;
    return this.http.post(`${this.baseUrl}/add`, car, this.httpHeaders);
  }
}
