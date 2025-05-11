import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const bloodComponentsRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'blood-component-list',
    loadComponent: () =>
      import('./components/blood-components-list/blood-components-list.component').then(c => c.BloodComponentsListComponent)
  },
  {
    path: 'blood-component-list:id',
    loadComponent: () =>
      import('./components/blood-components-detail/blood-components-detail.component').then(c => c.BloodComponentsDetailComponent)
  }
]
