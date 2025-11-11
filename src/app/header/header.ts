// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class HeaderComponent {
  isLoginPage = false;

  constructor(private router: Router, private auth: AuthService) {
    // listen to route changes
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url.includes('/login');
    });
  }

  logout() {
    this.auth.logout();
  }
}
