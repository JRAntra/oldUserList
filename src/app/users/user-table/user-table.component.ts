import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../userInfo.interface';

@Component({
  selector: 'app-user-table',
  standalone: false,
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit{

  // Component Lifecycle
  // https://v17.angular.io/guide/lifecycle-hooks
  constructor(private userService: UserService){

  }

  userList : UserInfo[] = []
  ngOnInit(): void {
    this.userList = this.userService.userDataList
  }
  deleteRow(name:string){

  }



}
