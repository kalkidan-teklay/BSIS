import {Routes} from '@angular/router';
import { SettingsRoutes } from '../core/constants/route-paths';

export const settingsRoutes: Routes = [
    {
        path: SettingsRoutes.ROOT,
        redirectTo: SettingsRoutes.ACCOUNT_SETTINGS,
        pathMatch: 'full'
    },
    {
        path: SettingsRoutes.ACCOUNT_SETTINGS,
        loadComponent: () =>
            import('./components/account-settings/account-settings.component').then(c => c.AccountSettingsComponent)
    },
    {
        path: SettingsRoutes.GENERAL_CONFIGURATIONS,
        loadComponent: () =>
            import('./components/general-configurations/general-configurations.component').then(c => c.GeneralConfigurationsComponent)
    },
    {
        path: SettingsRoutes.MANAGE_LOCATIONS,
        loadComponent: () =>
            import('./components/manage-locations/manage-locations.component').then(c => c.ManageLocationsComponent)
    },
    {
        path: SettingsRoutes.MANAGE_DIVISIONS,
        loadComponent: () =>
            import('./components/manage-divisions/manage-divisions.component').then(c => c.ManageDivisionsComponent)
    },
    {
        path: SettingsRoutes.MANAGE_ADVERSE_EVENT_TYPES,
        loadComponent: () =>
            import('./components/manage-adverse-event-types/manage-adverse-event-types.component').then(c => c.ManageAdverseEventTypesComponent)
    },
    {
        path: SettingsRoutes.MANAGE_USERS,
        loadComponent: () =>
            import('./components/manage-users/manage-users.component').then(c => c.ManageUsersComponent)
    },
    {
        path: SettingsRoutes.MANAGE_ROLES,
        loadComponent: () =>
            import('./components/manage-roles/manage-roles.component').then(c => c.ManageRolesComponent)
    },
    {
        path: SettingsRoutes.MANAGE_DEFERRAL_REASONS,
        loadComponent: () =>
            import('./components/manage-deferral-reasons/manage-deferral-reasons.component').then(c => c.ManageDeferralReasonsComponent)
    },
    {
        path: SettingsRoutes.MANAGE_DISCARD_REASONS,
        loadComponent: () =>
            import('./components/manage-discard-reasons/manage-discard-reasons.component').then(c => c.ManageDiscardReasonsComponent)
    },
    {
        path: SettingsRoutes.MANAGE_DONATION_TYPES,
        loadComponent: () =>
            import('./components/manage-donation-types/manage-donation-types.component').then(c => c.ManageDonationTypesComponent)
    },
    {
        path: SettingsRoutes.MANAGE_PACK_TYPES,
        loadComponent: () =>
            import('./components/manage-pack-types/manage-pack-types.component').then(c => c.ManagePackTypesComponent)
    },
    {
        path: SettingsRoutes.MANAGE_COMPONENT_TYPES,
        loadComponent: () =>
            import('./components/manage-component-types/manage-component-types.component').then(c => c.ManageComponentTypesComponent)
    },
    {
        path: SettingsRoutes.MANAGE_COMPONENT_COMBINATIONS,
        loadComponent: () =>
            import('./components/manage-component-combinations/manage-component-combinations.component').then(c => c.ManageComponentCombinationsComponent)
    },
    {
        path: SettingsRoutes.MANAGE_BLOOD_TESTS,
        loadComponent: () =>
            import('./components/manage-blood-tests/manage-blood-tests.component').then(c => c.ManageBloodTestsComponent)
    },
    {
        path: SettingsRoutes.MANAGE_BLOOD_TESTING_RULES,
        loadComponent: () =>
            import('./components/manage-blood-testing-rules/manage-blood-testing-rules.component').then(c => c.ManageBloodTestingRulesComponent)
    },
    {
        path: SettingsRoutes.MANAGE_TRANSFUSION_REACTION_TYPES,
        loadComponent: () =>
            import('./components/manage-transfusion-reaction-types/manage-transfusion-reaction-types.component').then(c => c.ManageTransfusionReactionTypesComponent)
    },
    {
        path: SettingsRoutes.VIEW_AUDIT_LOGS,
        loadComponent: () =>
            import('./components/view-audit-logs/view-audit-logs.component').then(c => c.ViewAuditLogsComponent)
    },
    {
        path: SettingsRoutes.DATA_EXPORT,
        loadComponent: () =>
            import('./components/data-export/data-export.component').then(c => c.DataExportComponent)
    },
    {
        path: SettingsRoutes.SMS_MESSAGE_CONFIGURATIONS,
        loadComponent: () =>
            import('./components/sms-message-configurations/sms-message-configurations.component').then(c => c.SmsMessageConfigurationsComponent)
    },
    {
        path: SettingsRoutes.EDUCATION_AND_AWARENESS,
        loadComponent: () =>
            import('./components/education-and-awareness/education-and-awareness.component').then(c => c.EducationAndAwarenessComponent)
    }
    
]
