import { Interpolation } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserInfo } from '../../../services/userInfo.interface';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-input-form',
  standalone: false,
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  // var
  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    name: ['DD'],
    username: ['David'],
    email: ['david@gmail.com'],
    address: this.fb.group({
      street: ['134 E Rd'],
      suite: ['567'],
      city: ['Naperville'],
      zipcode: ['12345'],
      geo: this.fb.group({
        lat: [1234],
        lng: [5678],
      }),
    }),
    phone: [123456789],
    website: ['www.my.com'],
    company: this.fb.group({
      name: ['Antra'],
      catchPhrase: ['sdfsf'],
      bs: ['sdfdsf'],
    }),
  });

  // lifecycle
  // constructor(private userService: UserService) {}

  // 1.one way databinding
  //   1.string Interpolation
  //   2.event binding
  //   3.property binding
  // 2.2 way databinding
  //   1.ReactiveForms
  //   2.Template-driven - deprecated
  // name = new FormControl('');
  // age = new FormControl('');
  // role = new FormControl('');
  // address = new FormControl('');
  // email = new FormControl('');

  // method
  onSubmit() {
    console.log(this.form.value);
    this.userService.addNewUser(this.form.value).subscribe();
  }
}
