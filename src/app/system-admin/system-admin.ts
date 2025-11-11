// system-admin.component.ts
import { Component, inject } from '@angular/core';
import { UserRole } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-admin',
  templateUrl: './system-admin.html',
})
export class SystemAdminComponent {
  role: string | null = null;

  router = inject(Router);

  goToProfile() {
    localStorage.setItem('profile', 'system-admin');
    this.role = localStorage.getItem('role');
    if (this.role === 'system-admin') {
      this.router.navigate(['/company/profile']);
    }
  }
}
