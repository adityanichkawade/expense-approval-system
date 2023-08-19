import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ea-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  login = { username: '', password: '' };
  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.login);
    this.authService
      .login(this.login.username, this.login.password)
      .subscribe((res) => {
        this.route.navigate(['/home']);
      });
  }
}
