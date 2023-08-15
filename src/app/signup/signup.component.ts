import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  signin = { username: '', password: '' };
  constructor() {}

  ngOnInit() {}
}
