import {Routes} from '@angular/router';
import { ReportRoutes } from '../core/constants/route-paths';

export const reportsRoutes: Routes = [
    {
        path: ReportRoutes.ROOT,
        redirectTo: ReportRoutes.DASHBOARD,
        pathMatch: 'full'
    },
    {
        path: ReportRoutes.DASHBOARD,
        loadComponent: () =>
            import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent)
    },
    {
        path: ReportRoutes.ABO_RH_BLOOD_GROUPING_REPORT,
        loadComponent: () =>
            import('./components/abo-rh-blood-grouping-report/abo-rh-blood-grouping-report.component').then(c => c.ABORhBloodGroupingReportComponent)
    },
    {
        path: ReportRoutes.AUDIT_REPORT,
        loadComponent: () =>
            import('./components/audit-report/audit-report.component').then(c => c.AuditReportComponent)
    },
    { 
        path: ReportRoutes.BLOOD_BANK_REPORT,
        loadComponent: () =>
            import('./components/blood-bank-report/blood-bank-report.component').then(c => c.BloodBankReportComponent)
    },
    {
        path: ReportRoutes.BLOOD_UNITS_ISSUED_REPORT,
        loadComponent: () =>
            import('./components/blood-units-issued-report/blood-units-issued-report.component').then(c => c.BloodUnitsIssuedReportComponent)
    },
    {
        path: ReportRoutes.COMPONENT_REPORT,
        loadComponent: () =>
            import('./components/component-report/component-report.component').then(c => c.ComponentReportComponent)
    },
    {
        path: ReportRoutes.COMPONENTS_PRODUCED_REPORT,
        loadComponent: () =>
            import('./components/components-produced-report/components-produced-report.component').then(c => c.ComponentsProducedReportComponent)
    },
    {
        path: ReportRoutes.DISCARDS_REPORT,
        loadComponent: () =>
            import('./components/discards-report/discards-report.component').then(c => c.DiscardsReportComponent)
    },
    {
        path: ReportRoutes.DONATION_REPORT,
        loadComponent: () =>
            import('./components/donation-report/donation-report.component').then(c => c.DonationReportComponent)
    },
    {
        path: ReportRoutes.DONATION_TRENDS,
        loadComponent: () =>
            import('./components/donation-trends/donation-trends.component').then(c => c.DonationTrendsComponent)
    },
    {
        path: ReportRoutes.DONATION_TYPES_REPORT,
        loadComponent: () =>
            import('./components/donation-types-report/donation-types-report.component').then(c => c.DonationTypesReportComponent)
    },
    {
        path: ReportRoutes.DONOR_DEMOGRAPHICS,
        loadComponent: () =>
            import('./components/donor-demographics/donor-demographics.component').then(c => c.DonorDemographicsComponent)
    },
    {
        path: ReportRoutes.DONORS_ADVERSE_EVENTS_REPORT,
        loadComponent: () =>
            import('./components/donors-adverse-events-report/donors-adverse-events-report.component').then(c => c.DonorsAdverseEventsReportComponent)
    },
    {
        path: ReportRoutes.DONORS_DEFERRED_REPORT,
        loadComponent: () =>
            import('./components/donors-deferred-report/donors-deferred-report.component').then(c => c.DonorsDeferredReportComponent)
    },
    {
        path: ReportRoutes.POST_DONATION_COUNSELLING_REPORT,
        loadComponent: () =>
            import('./components/post-donation-counselling-report/post-donation-counselling-report.component').then(c => c.PostDonationCounsellingReportComponent)
    },
    {
        path: ReportRoutes.SEROLOGY_REPORT,
        loadComponent: () =>
            import('./components/serology-report/serology-report.component').then(c => c.SerologyReportComponent)
    },
    {
        path: ReportRoutes.TRANSFUSION_REPORT,
        loadComponent: () =>
            import('./components/transfusion-report/transfusion-report.component').then(c => c.TransfusionReportComponent)
    },
    {
        path: ReportRoutes.TTI_PREVALENCE_REPORT,
        loadComponent: () =>
            import('./components/tti-prevalence-report/tti-prevalence-report.component').then(c => c.TTIPrevalenceReportComponent)
    }
]
