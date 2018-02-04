import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './views/users/login/login.component';

import {ProfileComponent} from './views/users/profile/profile.component';

import {RegistrationComponent} from './views/users/registration/registration.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'registration', component: RegistrationComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
