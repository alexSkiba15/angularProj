import {FormsModule} from '@angular/forms';
import {CoreComponent} from './core.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ModelModule} from '../model/model.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, ModelModule],
  exports: [
    CoreComponent,
    ModelModule
  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
