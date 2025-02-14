import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {
  partialUser,
  User,
  UserInfo,
} from '../../../services/userInfo.interface';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-table',
  standalone: false,
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent implements OnInit, OnDestroy {
  userList: partialUser[] = [];
  sbp = new Subscription();
  notifier = new Subject();

  // Component Lifecycle
  // https://v17.angular.io/guide/lifecycle-hooks

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userList = this.userService.userDataList

    this.userService.users$
      .pipe(takeUntil(this.notifier))
      .subscribe((users: partialUser[]) => {
        this.userList = users;
      });

    this.sbp.add(this.userService.getUsers().subscribe());
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
    this.stopobs();
  }

  stopobs() {
    this.notifier.next(null);
    this.notifier.complete();
  }

  deleteRow(id: number = 0) {
    this.userService.deleteUser(id).pipe(takeUntil(this.notifier)).subscribe();
  }
}
