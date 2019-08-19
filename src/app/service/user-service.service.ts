import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../module/user';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class UserService {
 
  private usersUrl: string;
 
  constructor(private httpClient: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }
 
  public findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersUrl);
  }
 
  public save(user: User) {
    return this.httpClient.post<User>(this.usersUrl, user);
  }

  public delete(id: string) {
    const url = this.usersUrl +'/' + id;
    return this.httpClient.delete<User>(url);
  }
}