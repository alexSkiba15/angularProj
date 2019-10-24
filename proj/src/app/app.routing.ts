import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core/core.component';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './not-found/not-found.component';
import {ViewComponent} from './core/view/view.component';
import {OwnerComponent} from './core/owner/owner.component';

const routes: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CoreComponent},
  {path: 'cars/add', component: ViewComponent},
  {path: 'cars/edit/:id', component: ViewComponent},
  {path: 'cars/owners', component: OwnerComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
