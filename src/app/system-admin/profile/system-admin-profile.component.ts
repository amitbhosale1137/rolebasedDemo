// system-admin-profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-system-admin-profile',
  standalone: true,
  template: `
    <h2>System Admin Profile</h2>
    <p>You have access to manage all companies and system settings.</p>
  `,
})
export class SystemAdminProfileComponent {}
