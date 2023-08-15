import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from './auth.model';
import { API_ENDPOINTS } from './auth.config';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.get<ILogin>(API_ENDPOINTS.login.url).pipe(
      catchError(this.handleError),
      tap((res: ILogin) => {
        localStorage.setItem('token', res.data.token);
      })
    );
  }

  isLoggedIn(): Boolean {
    return localStorage.getItem('token') ? true : false;
  }

  handleError(error: any) {
    return throwError(() => error);
  }
}