import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {


  widget: Widget;
  widgetId: string;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      const widgetId = params['wgid'];
      this.widgetService.updateWidget(this.widgetId, this.widget);

    });
  }
}

