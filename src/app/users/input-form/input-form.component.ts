import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserInfo } from '../userInfo.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-input-form',
  standalone: false,
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent implements OnInit {
  // // 1.one way databinding
  // //   1.string Interpolation
  // //   2.event binding
  // //   3.property binding
  // // 2.2 way databinding
  // //   1.ReactiveForms
  // //   2.Template-driven - deprecated
  // name = new FormControl('');
  // age = new FormControl('');
  // role = new FormControl('');
  // address = new FormControl('');
  // email = new FormControl('');

  form!: FormGroup;
  // form = new FormGroup({
  //   name: new FormControl('')
  // })

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['DD'],
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
  }

  addNewUser() {
    console.log(this.form.value);
    // const newUser: UserInfo = {
    //   name: this.name.value ? this.name.value : '',
    //   age: this.age.value ? this.age.value : '',
    //   role: this.role.value ? this.role.value : '',
    //   address: this.address.value ? this.address.value : '',
    //   email: this.email.value ? this.email.value : '',
    // };
    // this.userService.addNewUser(newUser);
    // console.log(this.userService.userDataList);
  }
}
