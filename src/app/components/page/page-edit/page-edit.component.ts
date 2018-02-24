
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../models/page.model.client';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  page: Page;
  showDeleteConfirmation: boolean;
  @ViewChild('pageEditForm') pageEditForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private pageService: PageService) {}

  ngOnInit() {
    this.showDeleteConfirmation = false;
    this.activatedRoute.params.subscribe(
      (params) => {
        this.userId = params['userId'];
        this.page = this.pageService.findPageById(params['_id']);
      });
  }

  deletePage() {
    if ( this.pageService.deletePage(this.pageId)) {
      alert('Page deleted sucessfully!');
      this.router.navigate(['/user/:uid/website/:wid/page']);

    }
  }
}
