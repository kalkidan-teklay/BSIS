import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { DonorRoutes } from '../core/constants/route-paths';

export const donorsRoutes: Routes = [
    {path: DonorRoutes.ROOT, component: HomeComponent},
    {
        path: DonorRoutes.DONOR_COUNSELLLING,
        loadComponent: () => 
            import('./components/donor-counselling/donor-counselling.component').then(c => c.DonorCounsellingComponent)
    },
    {
        path: DonorRoutes.DUPLICATE_DONORS,
        loadComponent: () =>
            import('./components/duplicate-donors/duplicate-donors.component').then(c => c.DuplicateDonorsComponent)
    },
    {
        path: DonorRoutes.MANAGE_DONATION_BATCHES,
        loadComponent: () =>
            import('./components/manage-donation-batches/manage-donation-batches.component').then(c => c.ManageDonationBatchesComponent)
    },
    {
        path: DonorRoutes.MANAGE_DONOR_APPOINTMENT,
        loadComponent: () =>
            import('./components/manage-donor-appointment/manage-donor-appointment.component').then(c => c.ManageDonorAppointmentComponent)
    },
    {
        path: DonorRoutes.MANAGE_DONORS,
        loadComponent: () =>
            import('./components/manage-donors/manage-donors.component').then(c => c.ManageDonorsComponent)
    },
    {
        path: DonorRoutes.VIEW_EXPORT_DONOR_LIST,
        loadComponent: () =>
            import('./components/view-export-donor-list/view-export-donor-list.component').then(c => c.ViewExportDonorListComponent)
    }
]
