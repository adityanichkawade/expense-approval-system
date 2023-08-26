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
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<Auth>(API_ENDPOINTS.login.url, {
        username,
        password,
      })
      .pipe(
        tap((res: Auth) => {
          localStorage.setItem('token', res.data.token);
        })
      );
  }

  logout() {
    return new Observable((subscriber) => {
      const token = localStorage.removeItem('token');
      subscriber.next(token);
    });
  }

  isLoggedIn(): Boolean {
    const token = this.getAuthorizationToken();
    return token ? true : false;
  }

  getAuthorizationToken() {
    return localStorage.getItem('token');
  }
}
