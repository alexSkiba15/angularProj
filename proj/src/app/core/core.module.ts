import {NgModule} from '@angular/core';

import {CoreComponent} from './core.component';
import {AddCarComponent} from '../add-car/add-car.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app.routing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CoreComponent, AddCarComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class CoreModule {

}
