// login.component.ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule], // <-- required
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      role: ['', Validators.required],
      companyId: [''],
      siteId: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { role, companyId, siteId } = this.form.value;
      this.auth.login(role, companyId, siteId);
      //this.router.navigate(['/dashboard']); // always same URL
    }
  }
}
