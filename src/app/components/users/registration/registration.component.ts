import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  username: String;
  password: String;
  verifyPassword: String;
  firstName: String;
  lastName: String;
  errorFlag: boolean;
  userDuplicateError: boolean;
  errorMsg = 'Two passwords mismatch, please retry';
  userDuplicateErrorMsg = 'The user already exits';

  constructor(
    private userService: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {}
  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    this.lastName = this.registerForm.value.lastName;
    this.firstName = this.registerForm.value.firstName;
    if (this.userService.findUserByCredential(this.username, this.password) != null) {
      this.userDuplicateError = true;
      alert(this.userDuplicateErrorMsg);
    }
    if (this.verifyPassword !== this.password) {
      this.errorFlag = true;
      alert(this.errorMsg);
    }
    if (this.errorFlag) {
      this.password = null;
    }
    const user: User = new User(Math.random().toString() + '', this.username, this.password);
    this.userService.createUser(user);
    this.router.navigate(['/profile', user._id]);
  }
  cancel() {
    this.router.navigate(['/login']);
  }
  OnInit() {}

  ngOnInit(): void {
  }
}

