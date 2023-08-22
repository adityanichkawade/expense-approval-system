import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { SignUp } from './signup.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ea-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    username: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    role: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) {}

  get username(): FormControl {
    return this.signupForm.get('username') as FormControl;
  }

  get firstname(): FormControl {
    return this.signupForm.get('firstname') as FormControl;
  }

  get lastname(): FormControl {
    return this.signupForm.get('lastname') as FormControl;
  }

  get password(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  get email(): FormControl {
    return this.signupForm.get('email') as FormControl;
  }

  get role(): FormControl {
    return this.signupForm.get('role') as FormControl;
  }

  ngOnInit() {}

  onSubmit() {
    if (this.signupForm.valid) {
      const { username, password, email, role, firstname, lastname } =
        this.signupForm.value;
      this.signupService
        .signup(
          new SignUp(
            username || '',
            password || '',
            email || '',
            firstname || '',
            lastname || '',
            role || ''
          )
        )
        .subscribe((res) => {
          this.router.navigate(['/']);
        });
    }
  }
}
