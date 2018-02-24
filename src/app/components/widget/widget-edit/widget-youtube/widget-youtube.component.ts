import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  @ViewChild('widgetYoutubeEditForm') widgetYoutubeEditForm: NgForm;
  widgetId: string;
  widget: WidgetService;
  private showDeleteConfirmation: Boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) { }

  ngOnInit() {
  }


  delete() {
    this.widgetService.updateWidget(this.widgetId, this.widget);

  }

}
