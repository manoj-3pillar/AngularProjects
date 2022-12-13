import { Injectable } from '@angular/core';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: IUser){
    let UserArray : IUser[]  = [];

    if(localStorage.getItem('UserList')) {
      UserArray = JSON.parse(localStorage.getItem('UserList')|| '{}');
    }

    return UserArray.find(p => p.email === user.email && p.password === user.password);
  }
}
