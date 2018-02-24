import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {WebsiteService} from '../../../services/website.service.client';



@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  widgetTypes: string[];
  pageId: string;
  widgetId: string;
  // widgetType: string;
  size: string;
  text: string;
  url: string;
  width: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) { }

  ngOnInit() {


    this.activatedRoute.params.subscribe((params: any) => {
      this.pageId = params['pid'];
    });

    this.widgetTypes = [];
    for (const w in Widget) {
      if (typeof Widget[w] === 'number') {
        this.widgetTypes.push(w);
      }
    }
  }

  createWidget(type: string) {
    const newWidget = new Widget(this.widgetId, this.widgetTypes, this.pageId, this.size, this.text, this.url, this.width);
    newWidget.widgetType = Widget[type];
    this.widgetService.createWidget(this.pageId, newWidget);
  }

}
