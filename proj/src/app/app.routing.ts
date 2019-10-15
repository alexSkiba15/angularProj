import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core/core.component';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './not-found/not-found.component';
import {EditCarComponent} from './core/edit-car/edit-car.component';
import {AddCarComponent} from './core/add-car/add-car.component';

const routes: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CoreComponent},
  {path: 'cars/add', component: AddCarComponent},
  {path: 'cars/edit/:id', component: EditCarComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
