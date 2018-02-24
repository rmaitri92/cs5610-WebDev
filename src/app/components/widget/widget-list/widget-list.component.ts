import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  WidgetType = Widget;
  widgets: Widget[];
  private pageId: string;

  constructor(private activatedRoute: ActivatedRoute,
  private router: Router,
  private widgetService: WidgetService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      this.pageId = params['pid'];
      this.widgetService.updateWidget(this.pageId, this.widgets);

    });
  }

}
