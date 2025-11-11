import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('rolebasedDemo');

  constructor(private router: Router) {
    const role = localStorage.getItem('role');
    const companyId = localStorage.getItem('companyId');
    const siteId = localStorage.getItem('siteId');
    const profile = localStorage.getItem('profile');

    if (role === 'system-admin') {
      if (profile == 'system-admin') {
        this.router.navigate(['/company/profile']);
      } else {
        this.router.navigate(['/company']);
      }
    } else if (role === 'company-admin' && companyId) {
      if (profile == 'company-admin') {
        this.router.navigate(['/company', companyId, 'profile']);
      } else {
        this.router.navigate(['/company', companyId]);
      }
    } else if (role === 'site-admin' && companyId && siteId) {
      if (profile == 'site-admin') {
        this.router.navigate(['/company', companyId, 'site', siteId, 'profile']);
      } else {
        this.router.navigate(['/company', companyId, 'site', siteId]);
      }
    }
  }
}
