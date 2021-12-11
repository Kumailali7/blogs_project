import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  users = [
    {
      "username" : "blog",
      "password" : "dummy"
    },
    {
      "username" : "kumail",
      "password" : "dummy"
    }
  ]

  constructor() { }

  authenticate(username: string, password: string) {
    for(let i=0; i<this.users.length; i++){
      if(this.users[i].username===username && this.users[i].password===password) {
        sessionStorage.setItem('authenticatedUser', username);
        return true;
      }
    }
    return false;
  }

  createUser(username : string, password: string) {
    if(username!='' && password!='') {
      this.users.push(
        {
          "username" : username,
          "password"  : password
        }
      );
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
