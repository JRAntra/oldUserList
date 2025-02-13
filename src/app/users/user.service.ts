import { inject, Injectable } from '@angular/core';
import { RegisterUserDto, User, UserInfo } from './userInfo.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private usersPath = 'users';
  users$ = new BehaviorSubject<User[]>([]);

  // constructor(private http: HttpClient) {}

  addUser(newuser: RegisterUserDto) {
    return this.http
      .post<User>([this.baseUrl, this.usersPath].join('/'), newuser)
      .pipe(
        tap((user: User) => {
          this.users$.next([...this.users$.value, user]);
        })
      );
  }

  getUsers() {
    return this.http.get<User[]>([this.baseUrl, this.usersPath].join('/')).pipe(
      tap((users: User[]) => {
        this.users$.next(users);
      })
    );
  }

  deleteUser(id: number) {
    this.users$.next(
      this.users$.value.filter((user: User) => {
        return user.id !== id;
      })
    );
    return this.http.delete([this.baseUrl, this.usersPath, id].join('/'));
  }
}
