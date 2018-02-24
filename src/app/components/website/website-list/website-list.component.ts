import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: string;
  websites: Website[];


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private websiteService: WebsiteService,
              private userService: UserService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId);
      if (this.userId) {
        this.getWebsites();
      } else {
              alert('User with Id  does not exist. Please login again');
              this.router.navigate(['/login']);
            }
          },

        );
  }


  getWebsites() {

    this.websiteService.findWebsitesByUser(this.userId);

  }
}
