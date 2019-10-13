import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from './car';
import {Table} from './table';

export const REST_URL = new InjectionToken('rest_url');
const httpHeaders = {
  headers: new HttpHeaders(
    {'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = 'http://localhost:8000/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Table> {
    return this.http.get<Table>(`${this.baseUrl}/`, httpHeaders);
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.baseUrl}/add`, car, httpHeaders);
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.baseUrl}/delete/` + id);
  }
}
