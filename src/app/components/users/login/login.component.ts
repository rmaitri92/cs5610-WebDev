import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') myloginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) {}

  /*login(username: String, password: String) {
    //alert('username: ' + username);
   // if (username === 'alice' && password == "qqq") {
      const user: User = this.userService.findUserByCredential(username, password);
      if (user) {
        this.router.navigate(['/profile', user._id ]);
      }
   // }
  }*/

  login() {
    this.username = this.myloginForm.value.username;
    this.password = this.myloginForm.value.password;
    alert(this.username);

    const user: User = this.userService.findUserByCredential(this.username, this.password);
    if (user) {
      alert('Successful Login');
      this.router.navigate(['/profile', user._id]);
    } else {
      alert('Wrong credentials! Username or Password is incorrect');
      this.router.navigate(['/login']);
    }
  }

  register() {
    this.router.navigate(['/registration']);
  }

  ngOnInit() {
  }

}
