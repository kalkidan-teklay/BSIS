import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const mobileClinicsRoutes: Routes = [
    {path: '', component: HomeComponent},
        {
            path: 'donor-counselling',
            loadComponent: () =>
                import('./components/donor-counselling/donor-counselling.component').then(c => c.DonorCounsellingComponent)
        },
        {
            path: 'look-up',
            loadComponent: () =>
                import('./components/look-up/look-up.component').then(c => c.LookUpComponent)
        },
        {
            path: 'mobile-clinic-export',
            loadComponent: () =>
                import('./components/mobile-clinic-export/mobile-clinic-export.component').then(c =>c.MobileClinicExportComponent)
        }
]
