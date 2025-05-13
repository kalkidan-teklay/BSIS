import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { BloodComponentRoutes } from '../core/constants/route-paths';

export const bloodComponentsRoutes: Routes = [
  {path: BloodComponentRoutes.ROOT, component: HomeComponent},
  {
    path:  BloodComponentRoutes.DISCARD_COMPONENTS,
    loadComponent: () =>
      import('./components/discard-components/discard-components.component').then(c => c.DiscardComponentsComponent)
  },
  {
    path:  BloodComponentRoutes.FIND_COMPONENTS,
    loadComponent: () =>
      import('./components/find-components/find-components.component').then(c => c.FindComponentsComponent)
  },
  {
    path: BloodComponentRoutes.FIND_DISCARDS,
    loadComponent: () =>
      import('./components/find-discards/find-discards.component').then(c => c.FindDiscardsComponent)

  },
  {
    path: BloodComponentRoutes.RECEIVE_COMPONENTS,
    loadComponent: () =>
      import('./components/receive-components/receive-components.component').then(c => c.ReceiveComponentsComponent)
  },
  {
    path: BloodComponentRoutes.RECORD_COMPONENTS,
    loadComponent: () =>
      import('./components/record-components/record-components.component').then(c => c.RecordComponentsComponent)
  }
]
