import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  updateUser: User;
  user: User;
  userId: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }


  updateUserController() {

    const updateUser = {
      uid: this.userId,
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.userService.updateUser(this.user);

  }

  logout() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.userId = params['userId'];
        this.user = this.userService.findUserById(params['uid']);
      });
  }
}

