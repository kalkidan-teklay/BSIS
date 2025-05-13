import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { LabellingRoutes } from '../core/constants/route-paths';

export const labelingRoutes: Routes = [
    {path: LabellingRoutes.ROOT, component: HomeComponent},
    {
        path: LabellingRoutes.FIND_SAFE_COMPONENTS,
        loadComponent: () =>
            import('./components/find-safe-components/find-safe-components.component').then(c => c.FindSafeComponentsComponent)
    },
    {
        path: LabellingRoutes.LABEL_COMPONENT,
        loadComponent: () => 
            import('./components/label-components/label-components.component').then(C => C.LabelComponentsComponent)
    }
          
]
