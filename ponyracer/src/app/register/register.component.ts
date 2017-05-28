import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationFailed: boolean;

  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  birthYearCtrl: FormControl;

  passwordForm: FormGroup;
  userForm: FormGroup;

  static passwordMatch(control: FormGroup) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    return password !== confirmPassword ? { matchingError: true } : null;
  }

  static validYear(control: FormControl) {
    const birthYear = control.value;
    const currentYear = new Date().getFullYear();
    return (birthYear < 1900 || birthYear > currentYear) ? { invalidYear: true } : null;
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control('', Validators.required);
    this.confirmPasswordCtrl = fb.control('', Validators.required);
    this.birthYearCtrl = fb.control('', [Validators.required, RegisterComponent.validYear]);

    this.passwordForm = fb.group(
      {
        password: this.passwordCtrl,
        confirmPassword: this.confirmPasswordCtrl
      },
      { validator: RegisterComponent.passwordMatch }
    )

    this.userForm = fb.group(
      {
        login: this.loginCtrl,
        passwordForm: this.passwordForm,
        birthYear: this.birthYearCtrl
      }
    );
  }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.userForm.value.login, this.userForm.value.passwordForm.password, this.userForm.value.birthYear)
      .subscribe(
      () => {
        this.registrationFailed = false;
        this.router.navigate(['/']);
      },
      () => this.registrationFailed = true
      );
  }

}
