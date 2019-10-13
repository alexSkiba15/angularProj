import {NgModule} from '@angular/core';

import {CoreComponent} from './core.component';
import {AddCarComponent} from '../add-car/add-car.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app.routing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {
  MatButtonModule,
  MatButtonToggleModule, MatFormFieldModule,
  MatIconModule,
  MatOptionModule,
  MatPaginatorModule, MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [CoreComponent, AddCarComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatPaginatorModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
})
export class CoreModule {

}
