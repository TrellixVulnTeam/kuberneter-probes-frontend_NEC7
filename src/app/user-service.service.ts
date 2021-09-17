import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;
  private usersAddUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/person/list';
    this.usersAddUrl = 'http://localhost:8080/person/add';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
    console.log("service called");
  }

  public save(user: User) {
    return this.http.post<User>(this.usersAddUrl, user);
  }
}
