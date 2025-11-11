import { Routes } from '@angular/router';
import { RoleGuard } from './auth/role.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'company',
    loadComponent: () => import('./system-admin/system-admin').then((m) => m.SystemAdminComponent),
    canActivate: [RoleGuard],
    data: { role: 'system-admin' },
  },
  {
    path: 'company/:id',
    loadComponent: () =>
      import('./company-admin/company-admin').then((m) => m.CompanyAdminComponent),
    canActivate: [RoleGuard],
    data: { role: 'company-admin' },
  },
  {
    path: 'company/:companyId/site/:siteId',
    loadComponent: () => import('./site-admin/site-admin').then((m) => m.SiteAdminComponent),
    canActivate: [RoleGuard],
    data: { role: 'site-admin' },
  },
  {
    path: 'company/profile',
    loadComponent: () =>
      import('./system-admin/profile/system-admin-profile.component').then(
        (m) => m.SystemAdminProfileComponent
      ),
    canActivate: [RoleGuard],
    data: { role: 'system-admin' },
  },

  {
    path: 'company/:id/profile',
    loadComponent: () =>
      import('./company-admin/profile/company-admin-profile.component').then(
        (m) => m.CompanyAdminProfileComponent
      ),
    canActivate: [RoleGuard],
    data: { role: 'company-admin' },
  },

  {
    path: 'company/:companyId/site/:siteId/profile',
    loadComponent: () =>
      import('./site-admin/profile/site-admin-profile.component').then(
        (m) => m.SiteAdminProfileComponent
      ),
    canActivate: [RoleGuard],
    data: { role: 'site-admin' },
  },
];
