import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core/core.component';
import {AddCarComponent} from './add-car/add-car.component';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CoreComponent},
  {path: 'cars/add', component: AddCarComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
