// site-admin.component.ts
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-admin',
  templateUrl: './site-admin.html',
})
export class SiteAdminComponent {
  @Input() companyId: string | null = null;
  @Input() siteId: string | null = null;

  router = inject(Router);

  constructor(private route: ActivatedRoute) {
    // read params from the route
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.siteId = this.route.snapshot.paramMap.get('siteId');
  }

  goToProfile() {
    if (this.companyId) {
      localStorage.setItem('profile', 'site-admin');
      this.router.navigate(['/company', this.companyId, 'site', this.siteId, 'profile']);
    }
  }
}
