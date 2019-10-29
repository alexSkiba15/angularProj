import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car, Owner} from './car';
import {CarsDetailed, GetCar, GetOwner, GetOwners, ResultResponse, Table} from './table';

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

  createCar(car: Car): Observable<ResultResponse> {
    return this.http.post<ResultResponse>(`${this.baseUrl}/view/car/`, car, httpHeaders);
  }

  deleteCar(id: number): Observable<ResultResponse> {
    return this.http.delete<ResultResponse>(`${this.baseUrl}/view/car/${id}`);
  }

  editCar(id: number): Observable<GetCar> {
    return this.http.get<GetCar>(`${this.baseUrl}/view/car/${id}`);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/view/car/${car.id}`, car, httpHeaders);
  }

  getCarsDetailed(): Observable<CarsDetailed> {
    return this.http.get<CarsDetailed>(`${this.baseUrl}/owners`);
  }

  getOwners(): Observable<GetOwners> {
    return this.http.get<GetOwners>(`${this.baseUrl}/view/car`);
  }

  createOwner(owner: Owner): Observable<ResultResponse> {
    return this.http.post<ResultResponse>(`${this.baseUrl}/view/owner`, owner, httpHeaders);
  }

  deleteOwner(id: number): Observable<ResultResponse> {
    return this.http.delete<ResultResponse>(`${this.baseUrl}/view/owner/${id}`);
  }

  editOwner(id: number): Observable<GetOwner> {
    return this.http.get<GetOwner>(`${this.baseUrl}/view/owner/${id}`);
  }

  updateOwner(owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.baseUrl}/view/owner/${owner.id}`, owner, httpHeaders);
  }
}
