import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const bloodComponentsRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'discard-components',
    loadComponent: () =>
      import('./components/discard-components/discard-components.component').then(c => c.DiscardComponentsComponent)
  },
  {
    path: 'find-components',
    loadComponent: () =>
      import('./components/find-components/find-components.component').then(c => c.FindComponentsComponent)
  },
  {
    path: 'find-discards',
    loadComponent: () =>
      import('./components/find-discards/find-discards.component').then(c => c.FindDiscardsComponent)

  },
  {
    path: 'receive-components',
    loadComponent: () =>
      import('./components/receive-components/receive-components.component').then(c => c.ReceiveComponentsComponent)
  },
  {
    path: 'record-components',
    loadComponent: () =>
      import('./components/record-components/record-components.component').then(c => c.RecordComponentsComponent)
  }
]
