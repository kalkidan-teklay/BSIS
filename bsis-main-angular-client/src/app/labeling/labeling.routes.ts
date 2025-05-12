import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const labelingRoutes: Routes = [
    {path: '', component: HomeComponent},
        {
            path: 'find-safe-components',
            loadComponent: () =>
                import('./components/find-safe-components/find-safe-components.component').then(c => c.FindSafeComponentsComponent)
        },
        {
            path: 'label-components',
            loadComponent: () => 
                import('./components/label-components/label-components.component').then(C => C.LabelComponentsComponent)
        }
          
]
