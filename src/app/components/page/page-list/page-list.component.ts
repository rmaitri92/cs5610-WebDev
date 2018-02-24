import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../models/page.model.client';
import { PageService } from '../../../services/page.service.client';
import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: string;
  websiteId: string;
  pages: Page[];


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private pageService: PageService,
              private websiteService: WebsiteService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      // check if website exists
      this.websiteService.findWebsitesById(this.websiteId);
      if (this.websiteId === this.websiteId) {
        this.getPages();
      } else {

        this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
      }

      this.getPages();
    });

  }

  getPages() {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.websiteId = params['wid'];
        this.pages = this.pageService.findPageByWebsiteId(params['wid']);
      });

  }

}
