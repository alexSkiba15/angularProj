import {NgModule} from '@angular/core';

import {CoreComponent} from './core.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app.routing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatIconModule} from '@angular/material';
import {JwPaginationComponent} from 'jw-angular-pagination';
import {EditCarComponent} from './edit-car/edit-car.component';
import {AddCarComponent} from './add-car/add-car.component';
import {OwnerComponent} from './owner/owner.component';

@NgModule({
  declarations: [CoreComponent, AddCarComponent, JwPaginationComponent, EditCarComponent, OwnerComponent],
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
