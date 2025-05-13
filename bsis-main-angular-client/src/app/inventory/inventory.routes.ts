import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { InventoryRoutes } from '../core/constants/route-paths';

export const inventoryRoutes: Routes = [
    {path: InventoryRoutes.ROOT, component: HomeComponent},
    {
      path: InventoryRoutes.FIND_INVENTORY,
      loadComponent: () =>
        import('./components/find-inventory/find-inventory.component').then(c => c.FindInventoryComponent)
    },
    {
      path: InventoryRoutes.FIND_TRANSFUSION,
      loadComponent: () =>
        import('./components/find-transfusions/find-transfusions.component').then(c => c.FindTransfusionsComponent)
    },
    {
      path: InventoryRoutes.MANAGE_HOSPITAL_VIEW,
      loadComponent: () =>
        import('./components/manage-hospital-view/manage-hospital-view.component').then(c => c.ManageHospitalViewComponent)
    },
    {
      path: InventoryRoutes.MANAGE_ORDERS,
      loadComponent: () =>
          import('./components/manage-orders/manage-orders.component').then(c => c.ManageOrdersComponent)
    },
    {
      path: InventoryRoutes.MANAGE_RETURNS,
      loadComponent: () =>
          import('./components/manage-returns/manage-returns.component').then(c => c.ManageReturnsComponent)
    },
    {
      path: InventoryRoutes.VIEW_STOCK_LEVEL,
      loadComponent: () =>
          import('./components/view-stock-levels/view-stock-levels.component').then(c => c.ViewStockLevelsComponent)
    }
]
