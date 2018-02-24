import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing} from './app.routing';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// user components
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/registration/registration.component';
import { ProfileComponent } from './components/users/profile/profile.component';

// website components
// import { WebsiteListComponent } from './components/website/website-list/website-list.component';
// import { WebisteEditComponent } from './components/website/webiste-edit/webiste-edit.component';
// import { WebisteNewComponent } from './components/website/webiste-new/webiste-new.component';


// Page Components

import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';

// client side services
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';

import {PageService} from './services/page.service.client';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PageEditComponent,
    PageListComponent,
    PageNewComponent,
    WebsiteEditComponent,
    WebsiteNewComponent,
    WebsiteListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent // ,
    // WebsiteListComponent,
    // WebisteEditComponent,
    // WebisteNewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [UserService, WebsiteService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
