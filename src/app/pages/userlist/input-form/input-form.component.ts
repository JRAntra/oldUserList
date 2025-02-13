import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { RegisterUserDto } from '../../../services/userInfo.interface';

@Component({
  selector: 'app-input-form',
  standalone: false,
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  form: FormGroup = this.fb.group({
    name: ['DD', Validators.required],
    username: ['David'],
    email: ['hello@gmail.com'],
    address: this.fb.group({
      street: ['HT E Rd'],
      suite: ['520'],
      city: ['Naperville'],
      zipcode: [12345],
      geo: this.fb.group({
        lat: ['11223'],
        lng: ['22334'],
      }),
    }),
    phone: ['1234567890'],
    website: 'www.myweb.com',
    company: this.fb.group({
      name: ['Jump'],
      catchPhrase: ['44445555'],
      bs: ['what is this?'],
    }),
  });

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  addNewUser() {
    console.log(this.form.value);
    this.userService.addUser(this.form.value as RegisterUserDto).subscribe();
  }
}
