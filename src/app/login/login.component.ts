import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      alert('Login Succesfull');
    }
  }
}
