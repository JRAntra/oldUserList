import { inject, Injectable } from '@angular/core';
import { partialUser, User, UserInfo } from './userInfo.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly userPath = 'users';

  users$ = new BehaviorSubject<User[]>([]);

  // constructor(private http: HttpClient) {}

  getUsers(): Observable<partialUser[]> {
    return this.http.get<User[]>([this.baseUrl, this.userPath].join('/')).pipe(
      tap((users: User[]) => {
        this.users$.next(users);
      })
      // map((users: User[]) => {
      //   return users.map((user: User) => {
      //     return {
      //       name: user.name,
      //       username: user.username,
      //       phone: user.phone,
      //       address: {
      //         city: user.address.city,
      //         street: user.address.street,
      //       },
      //       email: user.email,
      //     } as partialUser;
      //   });
      // })
    );
  }

  addNewUser(user: partialUser) {
    return this.http
      .post<User>([this.baseUrl, this.userPath].join('/'), user)
      .pipe(
        tap((user: User) => {
          this.users$.next([...this.users$.value, user]);
          console.log(this.users$.value);
        })
      );
  }

  deleteUser(id: number) {
    const newUserList = this.users$.value.filter((user) => {
      return user.id !== id;
    });

    return this.http.delete([this.baseUrl, this.userPath, id].join('/')).pipe(
      tap((user) => {
        this.users$.next(newUserList);
      })
    );
  }
}
