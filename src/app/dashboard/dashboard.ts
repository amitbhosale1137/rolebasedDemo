// dashboard.component.ts
import { Component, inject } from '@angular/core';
import { SystemAdminComponent } from '../system-admin/system-admin';
import { CompanyAdminComponent } from '../company-admin/company-admin';
import { SiteAdminComponent } from '../site-admin/site-admin';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SystemAdminComponent, CompanyAdminComponent, SiteAdminComponent, CommonModule],
  templateUrl: './dashboard.html',
})
export class DashboardComponent {
  auth = inject(AuthService);
  role = this.auth.getRole();
  companyId = this.auth.getCompanyId();
  siteId = this.auth.getSiteId();
}
