import {Routes} from '@angular/router';
import {LoginComponent} from './core/components/login/login.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {MainNavComponent} from './core/components/main-nav/main-nav.component';

export const routes: Routes = [
  {
    path: '', component: MainNavComponent,
    children: [
      {
        path: 'donors', loadChildren: () =>
          import('./donors/donors.routes').then(r => r.donorsRoutes)
      },
      {
        path: 'testing', loadChildren: () =>
          import('./blood-testing/blood-testing.routes').then(r => r.bloodTestingRoutes)
      },
      {
        path: 'components', loadChildren: () =>
          import('./blood-components/blood-components.routes').then(r => r.bloodComponentsRoutes)
      },
      {
        path: 'labeling', loadChildren: () =>
          import('./labeling/labeling.routes').then(r => r.labelingRoutes)
      },
      {
        path: 'inventory', loadChildren: () =>
          import('./inventory/inventory.routes').then(r => r.inventoryRoutes)
      },
      {
        path: 'mobile-clinics', loadChildren: () =>
          import('./mobile-clinics/mobile-clinics.routes').then(r => r.mobileClinicsRoutes)
      },
      {
        path: 'reports', loadChildren: () =>
          import('./reports/reports.routes').then(r => r.reportsRoutes)
      },
      {
        path: 'settings', loadChildren: () =>
          import('./settings/settings.routes').then(r => r.settingsRoutes)
      }
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent},
];
