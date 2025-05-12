import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const donorsRoutes: Routes = [
    {path: '', component: HomeComponent},
        {
            path: 'donor-counselling',
            loadComponent: () => 
                import('./components/donor-counselling/donor-counselling.component').then(c => c.DonorCounsellingComponent)
        },
        {
            path: 'duplicate-donors',
            loadComponent: () =>
                import('./components/duplicate-donors/duplicate-donors.component').then(c => c.DuplicateDonorsComponent)
        },
        {
            path: 'manage-donation-batches',
            loadComponent: () =>
                import('./components/manage-donation-batches/manage-donation-batches.component').then(c => c.ManageDonationBatchesComponent)
        },
        {
            path: 'manage-donor-appointment',
            loadComponent: () =>
                import('./components/manage-donor-appointment/manage-donor-appointment.component').then(c => c.ManageDonorAppointmentComponent)
        },
        {
            path: 'manage-donors',
            loadComponent: () =>
                import('./components/manage-donors/manage-donors.component').then(c => c.ManageDonorsComponent)
        },
        {
            path: 'view-export-donor-list',
            loadComponent: () =>
                import('./components/view-export-donor-list/view-export-donor-list.component').then(c => c.ViewExportDonorListComponent)
        }
]
