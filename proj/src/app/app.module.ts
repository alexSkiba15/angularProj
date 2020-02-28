import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {FormsModule} from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import {CoreModule} from './core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import {NgxSpinnerModule} from 'ngx-spinner';
import {CookieService} from 'ngx-cookie-service';
import {AuthComponent} from './core/auth/auth.component';
import {CoreComponent, DialogOverviewCarDeleteComponent} from './core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgxSpinnerModule
  ],
  entryComponents: [AuthComponent, CoreComponent, DialogOverviewCarDeleteComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
