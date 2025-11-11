// company-admin-profile.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-admin-profile',
  template: `
    <h2>Company Admin Profile</h2>
    <p>Company ID: {{ companyId }}</p>
    <p>You can manage company‑level settings and users.</p>
  `,
})
export class CompanyAdminProfileComponent {
  companyId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.companyId = this.route.snapshot.paramMap.get('id');
  }
}
