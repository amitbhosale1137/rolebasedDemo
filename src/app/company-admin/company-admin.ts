// company-admin.component.ts
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-admin',
  standalone: true,
  templateUrl: './company-admin.html',
})
export class CompanyAdminComponent {
  @Input() companyId: string | null = null; // <-- Add this

  router = inject(Router);

  constructor(private route: ActivatedRoute) {
    this.companyId = this.route.snapshot.paramMap.get('id');
  }

  goToProfile() {
    if (this.companyId) {
      this.router.navigate(['/company', this.companyId, 'profile']);
    }
  }
}
