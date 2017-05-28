import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = { login: '', password: '' };

  authenticationFailed: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  authenticate() {
    this.userService.authenticate(this.credentials)
      .subscribe(
      () => {
        this.authenticationFailed = false;
        this.router.navigate(['/']);
      },
      () => this.authenticationFailed = true
      );
  }

}
