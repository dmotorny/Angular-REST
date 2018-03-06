import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Session } from '../models/session';
import { User } from '../models/user';

@Injectable()

export class UsersService {

  constructor(private http: HttpClient) { }

  /**
   * Create user
   * 
   * @method create
   * @param user {User} User
   * @return {Observable} Observable
   */
  create(user: User): Observable<any> {
    return this.http.post('registration', user, {responseType: 'text'});
  }

  /**
   * Login user
   * 
   * @method login
   * @param user {User} User
   * @return {Observable} Observable
   */
  login(user: User): Observable<any> {
    return this.http.post('login', user).pipe(map((data: Session) => {
      window.localStorage.setItem('token', data.token);
    }));
  }

}
