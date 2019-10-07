import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core/core.component';

const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: 'cars', component: CoreComponent}
];

export const routing = RouterModule.forRoot(routes);
