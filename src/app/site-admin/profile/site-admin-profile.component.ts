// site-admin-profile.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-admin-profile',
  template: `
    <h2>Site Admin Profile</h2>
    <p>Company ID: {{ companyId }}</p>
    <p>Site ID: {{ siteId }}</p>
    <p>You can manage site‑level operations and users.</p>
  `,
})
export class SiteAdminProfileComponent {
  companyId: string | null = null;
  siteId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.siteId = this.route.snapshot.paramMap.get('siteId');
  }
}
