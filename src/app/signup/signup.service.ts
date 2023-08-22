import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from './signup.config';
import { SignUp } from './signup.model';

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private http: HttpClient) {}

  signup(signupInfo: SignUp) {
    return this.http.post(API_ENDPOINTS.signup.url, signupInfo);
  }
}
