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

    // if root URL and role exists
    // if (this.router.url === '/' && role === 'company-admin' && companyId) {
    //   this.router.navigate(['/company', companyId]);
    // }
  }
}
