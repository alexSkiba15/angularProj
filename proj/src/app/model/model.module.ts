import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {CarService, REST_URL} from '../car.service';

@NgModule({
  imports: [HttpClientModule, HttpClientJsonpModule],
  providers: [CarService,
    { provide: REST_URL, useValue: 'http://localhost:4200/cars' }]
})
export class ModelModule { }
