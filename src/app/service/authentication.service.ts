import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { UserService } from './user-service.service'
import { map } from 'rxjs/operators'

export class User{
  constructor( public status: string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  logIn(email, password){
    console.log(email + " " + password)
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/users/validateLogin',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('email',email);

        let authString = 'Basic ' + btoa(email + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }
}

