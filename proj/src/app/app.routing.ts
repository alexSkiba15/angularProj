import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core/core.component';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './not-found/not-found.component';
import {CarViewComponent} from './core/view/car/car-view.component';
import {OwnerComponent} from './core/owner/owner.component';
import {OwnerViewComponent} from './core/view/owner/owner-view.component';
import {AuthComponent} from './core/auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CoreComponent},
  {path: 'cars/add-car', component: CarViewComponent},
  {path: 'cars/edit-car/:id', component: CarViewComponent},
  {path: 'cars/add-owner', component: OwnerViewComponent},
  {path: 'cars/edit-owner/:id', component: OwnerViewComponent},
  {path: 'cars/owners', component: OwnerComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
