import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: string;
  website: Website;
  name: string;
  developerId: string;
  description: string;
  newWebsite: string;
  @ViewChild('websiteNewForm') websiteNewForm: NgForm;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private websiteService: WebsiteService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
    });
    this.website = new Website(this.userId, this.name, this.developerId, this.description );
    this.website.developerId = this.userId;
  }

  saveChanges() {
  if (this.websiteNewForm.invalid) {
  // touch controls to highlight validation
  this.websiteService.createWebsite(this.userId, this.website);
        if (this.website) {

          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        } else {
         alert('Uh ho! Website creation failed. Refresh page and try again');
        }
      }
    }

}
