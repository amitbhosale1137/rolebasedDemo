// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type UserRole = 'system-admin' | 'company-admin' | 'site-admin';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private role: UserRole | null = null;
  private companyId: string | null = null;
  private siteId: string | null = null;

  constructor(private router: Router) {}

  login(role: UserRole, companyId?: string, siteId?: string) {
    this.role = role;
    this.companyId = companyId || null;
    this.siteId = siteId || null;

    // ✅ store in localStorage (persists) or sessionStorage (temporary)
    localStorage.setItem('role', role);
    if (companyId) localStorage.setItem('companyId', companyId);
    if (siteId) localStorage.setItem('siteId', siteId);

    if (role === 'system-admin') {
      this.router.navigate(['/company']);
    } else if (role === 'company-admin' && companyId) {
      this.router.navigate(['/company', companyId]);
    } else if (role === 'site-admin' && companyId && siteId) {
      this.router.navigate(['/company', companyId, 'site', siteId]);
    }
  }

  logout() {
    this.role = null;
    this.companyId = null;
    this.siteId = null;
    localStorage.clear(); // clear all stored values
    this.router.navigate(['/login']);
  }

  getRole() {
    return this.role;
  }
  getCompanyId() {
    return this.companyId;
  }
  getSiteId() {
    return this.siteId;
  }
}
