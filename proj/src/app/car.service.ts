import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from './car';
import {CarsDetailed, GetCar, GetOwners, Table} from './table';

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
    return this.http.post<Car>(`${this.baseUrl}/view`, car, httpHeaders);
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.baseUrl}/view/${id}`);
  }

  editCar(id: number): Observable<GetCar> {
    return this.http.get<GetCar>(`${this.baseUrl}/view/${id}`);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/view/${car.id}`, car, httpHeaders);
  }

  getCarsDetailed(): Observable<CarsDetailed> {
    return this.http.get<CarsDetailed>(`${this.baseUrl}/owners`);
  }

  getOwners(): Observable<GetOwners> {
    return this.http.get<GetOwners>(`${this.baseUrl}/view`);
  }
}
