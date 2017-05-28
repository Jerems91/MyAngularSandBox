import { UserModel } from './models/user.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {

  userEvents = new BehaviorSubject<UserModel>(undefined);

  constructor(
    private http: Http
  ) { }

  register(login: string, password: string, birthYear: number): Observable<any> {
    const data = { login, password, birthYear };
    return this.http.post('http://ponyracer.ninja-squad.com/api/users', data)
      .map(response => response.json());
  }

  authenticate(credentials: { login: string; password: string }): Observable<UserModel> {
    return this.http.post('http://ponyracer.ninja-squad.com/api/users/authentication', credentials)
      .map(response => response.json() as UserModel)
      .do(user => this.userEvents.next(user));
  }

}
