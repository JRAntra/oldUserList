import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl} from '@angular/forms'
import { UserInfo } from '../userInfo.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-input-form',
  standalone: false,
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  
  constructor(private userService: UserService){

  }

  // 1.one way databinding
  //   1.string Interpolation
  //   2.event binding
  //   3.property binding
  // 2.2 way databinding
  //   1.ReactiveForms
  //   2.Template-driven - deprecated
  name = new FormControl('');
  age = new FormControl('');
  role = new FormControl('');
  address = new FormControl('');
  email = new FormControl('');

  addNewUser(){
    const newUser : UserInfo = {
      name:this.name.value ? this.name.value : "",
      age:this.age.value ? this.age.value : "",
      role:this.role.value ? this.role.value : "",
      address:this.address.value ? this.address.value : "",
      email:this.email.value ? this.email.value : "",
    }
    this.userService.addNewUser(newUser)
    console.log(this.userService.userDataList)
  }


}
