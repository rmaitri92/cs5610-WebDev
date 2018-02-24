import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  website: Website;
  showDeleteConfirmation: boolean;
  @ViewChild('websiteEditForm') websiteEditForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private websiteService: WebsiteService) { }

  ngOnInit() {
    this.showDeleteConfirmation = false;
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];

      this.websiteService.findWebsitesById(this.websiteId);
       if (this.websiteId === this.websiteId) {
           this.router.navigate(['user/:uid/website/:wid']);
            } else {
              alert('Website does not exist');

            }
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
          });

          }

  deleteWebsite() {

    if (this.websiteId === this.website._id) {
      this.websiteService.deleteWebsite(this.websiteId);
    }



  }

}
