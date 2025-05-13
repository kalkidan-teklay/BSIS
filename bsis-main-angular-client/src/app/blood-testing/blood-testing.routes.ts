import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { BloodTestingRoutes } from '../core/constants/route-paths';

export const bloodTestingRoutes: Routes = [
    {path: BloodTestingRoutes.ROOT, component: HomeComponent},
    {
        path: BloodTestingRoutes.FIND_TEST_SAMPLES,
        loadComponent: () =>
            import('./components/find-test-samples/find-test-samples.component').then(c => c.FindTestSamplesComponent)
    },
    {
        path: BloodTestingRoutes.MANAGE_TEST_BATCHES,
        loadComponent: () =>
            import('./components/manage-test-batches/manage-test-batches.component').then(c => c.ManageTestBatchesComponent)
    },
    {
        path: BloodTestingRoutes.VIEW_TEST_SAMPLES,
        loadComponent: () =>
            import('./components/view-test-samples/view-test-samples.component').then(c => c.ViewTestSamplesComponent)
    }
            

]
