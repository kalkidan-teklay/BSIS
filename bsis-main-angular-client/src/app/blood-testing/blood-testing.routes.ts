import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const bloodTestingRoutes: Routes = [
    {path: '', component: HomeComponent},
        {
            path: 'find-test-samples',
            loadComponent: () =>
                import('./components/find-test-samples/find-test-samples.component').then(c => c.FindTestSamplesComponent)
        },
        {
            path: 'manage-test-batches',
            loadComponent: () =>
                import('./components/manage-test-batches/manage-test-batches.component').then(c => c.ManageTestBatchesComponent)
        },
        {
            path: 'view-test-samples',
            loadComponent: () =>
                import('./components/view-test-samples/view-test-samples.component').then(c => c.ViewTestSamplesComponent)
        }
            

]
