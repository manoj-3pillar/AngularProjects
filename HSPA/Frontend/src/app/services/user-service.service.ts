import { Injectable } from '@angular/core';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUser(user:IUser){
    let userList: any[] = [];
    if(localStorage.getItem('UserList')){
      userList = JSON.parse(localStorage.getItem('UserList')|| '{}');
      userList = [user, ...userList];
    }
    else{
      userList = [user];
    }
    localStorage.setItem('UserList', JSON.stringify(userList));
  }
}
