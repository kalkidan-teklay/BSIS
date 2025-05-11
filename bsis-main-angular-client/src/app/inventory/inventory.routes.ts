import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const inventoryRoutes: Routes = [
    {path: '', component: HomeComponent},
      {
        path: 'find-inventory',
        loadComponent: () =>
          import('./components/find-inventory/find-inventory.component').then(c => c.FindInventoryComponent)
      },
      {
        path: 'find-transfusion',
        loadComponent: () =>
          import('./components/find-transfusions/find-transfusions.component').then(c => c.FindTransfusionsComponent)
      },
      {
        path: 'manage-hospital-view',
        loadComponent: () =>
          import('./components/manage-hospital-view/manage-hospital-view.component').then(c => c.ManageHospitalViewComponent)
     },
     {
        path: 'manage-orders',
        loadComponent: () =>
            import('./components/manage-orders/manage-orders.component').then(c => c.ManageOrdersComponent)
     },
     {
        path: 'manage-returns',
        loadComponent: () =>
            import('./components/manage-returns/manage-returns.component').then(c => c.ManageReturnsComponent)
     },
     {
        path: 'view-stock-levels',
        loadComponent: () =>
            import('./components/view-stock-levels/view-stock-levels.component').then(c => c.ViewStockLevelsComponent)
     }
]
