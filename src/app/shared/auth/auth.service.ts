import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, AuthUser } from './auth.model';
import { API_ENDPOINTS } from './auth.config';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user!: AuthUser;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<Auth>(API_ENDPOINTS.login.url, {
        username,
        password,
      })
      .pipe(
        tap((res: Auth) => {
          localStorage.setItem('user', JSON.stringify(res.data));
        })
      );
  }

  logout() {
    return new Observable((subscriber) => {
      const user = localStorage.removeItem('user');
      subscriber.next(user);
    });
  }

  getUserProfile() {
    if (!this.user) {
      const user = localStorage.getItem('user') || '';
      if (user) {
        const data = JSON.parse(user);
        this.user = data;
      }
    }
    return this.user;
  }

  isLoggedIn(): Boolean {
    const user = this.getUserProfile();
    return this.user.token ? true : false;
  }

  getAuthorizationToken() {
    const user = this.getUserProfile();
    return this.user ? this.user.token : '';
  }
}
