import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { MobileClinicRoutes } from '../core/constants/route-paths';

export const mobileClinicsRoutes: Routes = [
    {
            path: MobileClinicRoutes.ROOT,
            redirectTo: MobileClinicRoutes.LOOK_UP,
            pathMatch: 'full'
    },
    {
        path: MobileClinicRoutes.DONOR_COUNSELLING,
        loadComponent: () =>
            import('./components/donor-counselling/donor-counselling.component').then(c => c.DonorCounsellingComponent)
    },
    {
        path: MobileClinicRoutes.LOOK_UP,
        loadComponent: () =>
            import('./components/look-up/look-up.component').then(c => c.LookUpComponent)
    },
    {
        path: MobileClinicRoutes.MOBILE_CLINIC_EXPORT,
        loadComponent: () =>
            import('./components/mobile-clinic-export/mobile-clinic-export.component').then(c =>c.MobileClinicExportComponent)
    }
]
