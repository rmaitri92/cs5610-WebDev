import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../models/page.model.client';
import { PageService } from '../../../services/page.service.client';




@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  page: Page;
  description: string;
  showDeleteConfirmation: boolean;
  name: string;
  @ViewChild('pageNewForm') pageNewForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private pageService: PageService) { }

  ngOnInit() {
    this.showDeleteConfirmation = false;
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });

    this.page = new Page(this.userId, this.name, this.websiteId, this.description );
  }


  saveChanges() {
    if (this.pageNewForm.invalid) {
      // touch controls to highlight validation
      this.pageNewForm.controls.name.markAsTouched({ onlySelf: true });
    } else {
      this.pageService.createPage(this.websiteId, this.page);
      if (this.page === this.page) {
        this.router.navigate(['user/:uid/website/:wid/page']);
      }
    }

  }
}
