// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    const currentRole = this.auth.getRole();
    const role = localStorage.getItem('role');
    const companyId = localStorage.getItem('companyId');
    const siteId = localStorage.getItem('siteId');
    debugger;

    if (expectedRole === currentRole) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  // canActivate(): boolean {
  //   const role = localStorage.getItem('role');
  //   const companyId = localStorage.getItem('companyId');
  //   const siteId = localStorage.getItem('siteId');

  // if (role) {
  //   if (role === 'system-admin') {
  //     this.router.navigate(['/company']);
  //   } else if (role === 'company-admin' && companyId) {
  //     this.router.navigate(['/company', companyId]);
  //   } else if (role === 'site-admin' && companyId && siteId) {
  //     this.router.navigate(['/company', companyId, 'site', siteId]);
  //   }
  //   return false;
  // }

  // return true;
}
