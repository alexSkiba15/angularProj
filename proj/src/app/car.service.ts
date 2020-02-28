import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car, Owner} from './car';
import {CarsDetailed, GetCar, GetOwner, GetOwners, ResultResponse, Table} from './table';
import {CookieService} from 'ngx-cookie-service';

export const REST_URL = new InjectionToken('rest_url');
const httpHeaders = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = 'http://localhost:8000/';
  private baseCarUrl = `${this.baseUrl}cars`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient,
              private cookieService: CookieService
  ) { }

  getCars(): Observable<Table> {
    return this.http.get<Table>(`${this.baseCarUrl}/`, httpHeaders);
  }

  createCar(car: Car): Observable<ResultResponse> {
    return this.http.post<ResultResponse>(`${this.baseCarUrl}/view/car/`, car, httpHeaders);
  }

  deleteCar(id: number): Observable<ResultResponse> {
    return this.http.delete<ResultResponse>(`${this.baseCarUrl}/view/car/${id}`, httpHeaders);
  }

  editCar(id: number): Observable<GetCar> {
    return this.http.get<GetCar>(`${this.baseCarUrl}/view/car/${id}`, httpHeaders);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.baseCarUrl}/view/car/${car.id}`, car, httpHeaders);
  }

  getCarsDetailed(): Observable<CarsDetailed> {
    return this.http.get<CarsDetailed>(`${this.baseCarUrl}/owners`, httpHeaders);
  }

  getOwners(): Observable<GetOwners> {
    return this.http.get<GetOwners>(`${this.baseCarUrl}/view/car/`, httpHeaders);
  }

  createOwner(owner: Owner): Observable<ResultResponse> {
    return this.http.post<ResultResponse>(`${this.baseCarUrl}/view/owner`, owner, httpHeaders);
  }

  deleteOwner(id: number): Observable<ResultResponse> {
    return this.http.delete<ResultResponse>(`${this.baseCarUrl}/view/owner/${id}`);
  }

  editOwner(id: number): Observable<GetOwner> {
    return this.http.get<GetOwner>(`${this.baseCarUrl}/view/owner/${id}`);
  }

  updateOwner(owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.baseCarUrl}/view/owner/${owner.id}`, owner, httpHeaders);
  }

  getScraper(): Observable<ResultResponse> {
    return this.http.get<ResultResponse>(`${this.baseCarUrl}/scraper_cars`, httpHeaders);
  }

  registerUser(authData): Observable<ResultResponse> {
    const body = JSON.stringify(authData);
    return this.http.post<ResultResponse>(`${this.baseUrl}register/`, body, httpHeaders);
  }

  loginUser(authData) {
    const body = JSON.stringify(authData);
    console.log(`${this.baseUrl}api-token-auth/` +  body +  ' http asd ' + httpHeaders);
    return this.http.post(`${this.baseUrl}api-token-auth/`, body, httpHeaders);
  }

  getAuthHeaders() {
    const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }
}
