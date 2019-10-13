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
import {MatIconModule} from '@angular/material';
import {JwPaginationComponent} from 'jw-angular-pagination';

@NgModule({
  declarations: [CoreComponent, AddCarComponent, JwPaginationComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule,
    MatIconModule,
  ],
  providers: [],
})
export class CoreModule {

}
