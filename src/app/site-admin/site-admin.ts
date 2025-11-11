// site-admin.component.ts
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-admin',
  standalone: true,
  template: `
    <h2>Welcome Site Admin</h2>
    <p>Company ID: {{ companyId }}</p>
    <p>Site ID: {{ siteId }}</p>
  `,
})
export class SiteAdminComponent {
  @Input() companyId: string | null = null;
  @Input() siteId: string | null = null;

  constructor(private route: ActivatedRoute) {
    // read params from the route
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.siteId = this.route.snapshot.paramMap.get('siteId');
  }
}
