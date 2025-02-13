import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User, UserInfo } from '../userInfo.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-table',
  standalone: false,
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent implements OnInit {
  userList: User[] = [];
  sbp = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.users$.subscribe((users) => {
      this.userList = users;
    });
    this.userService.getUsers().subscribe();
  }
  deleteRow(id: string) {
    this.userService.deleteUser(+id).subscribe();
  }
}
