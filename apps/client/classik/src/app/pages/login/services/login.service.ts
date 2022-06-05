import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/client/classik/src/environments/environment';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { User } from '../../../interfaces/User';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string) {
    return this.http
      .post<{access_token: string}>(environment.api.endpoint + '/auth/login', {
        login,
        password,
      })
      .pipe(
        map(async (res) => {
          const user: any = jwt_decode(res.access_token);
          console.log(user)
          this.currentUserSubject.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
