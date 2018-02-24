import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './components/users/login/login.component';

import {ProfileComponent} from './components/users/profile/profile.component';

import {RegisterComponent} from './components/users/registration/registration.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'registration', component: RegisterComponent},
  {path : 'user/:uid/website/:wid/page' , component: PageListComponent},
  {path : 'user/:uid/website/:wid/page/new' , component: PageNewComponent},
  {path : 'user/:uid/website/:wid/page/:pid' , component: PageEditComponent},
  { path : 'user/:userId/website' , component: WebsiteListComponent},
  { path : 'user/:uid/website/new' , component: WebsiteNewComponent},
  { path : 'user/:uid/website/:wid' , component: WebsiteEditComponent},
  { path : 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
  { path : 'user/:uid/website/:wid/page/:pid/widget/new' , component: WidgetChooserComponent},
  { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid' , component: WidgetEditComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
