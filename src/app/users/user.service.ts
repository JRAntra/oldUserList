import { Injectable } from '@angular/core';
import { UserInfo } from './userInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userDataList : UserInfo[] = [
    {name:"JR", age:"31",role:"trainer",address:"21000 Atlantic Blvd STE. 300",email:"jr@antra.com"},
    {name:"Patrick", age:"35",role:"manager",address:"21000 Atlantic Blvd STE. 300",email:"patrick@antra.com"},
    {name:"Miranda", age:"26",role:"trainer",address:"21000 Atlantic Blvd STE. 300",email:"miranda@antra.com"}
  ]

  addNewUser(user:UserInfo){
    this.userDataList.push(user)
  }


}
