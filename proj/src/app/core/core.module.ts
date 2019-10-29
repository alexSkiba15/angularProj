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
import {CarViewComponent} from './view/car/car-view.component';
import {OwnerComponent} from './owner/owner.component';
import {OwnerViewComponent} from './view/owner/owner-view.component';

@NgModule({
  declarations: [CoreComponent, CarViewComponent, JwPaginationComponent, OwnerComponent, OwnerViewComponent],
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
