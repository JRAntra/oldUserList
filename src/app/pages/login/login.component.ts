import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    email: [],
    password: [],
  });

  submit() {
    console.log(this.form.value);
  }
}
