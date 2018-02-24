import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  widgetId: string;
  widget: Widget;
  pageId: string;


  @ViewChild('widgetHeaderEditForm') widgetHeaderEditForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) { }


  ngOnInit() {
  }

  create() {
    this.widgetService.updateWidget(this.widgetId, this.widget);
    this.widgetService.createWidget(this.pageId, this.widget);
  }
}
