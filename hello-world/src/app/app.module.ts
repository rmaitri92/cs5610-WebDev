import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/users/login/login.component';
import { TestComponent } from './views/users/test/test.component';
import { ProfileComponent } from './views/users/profile/profile.component';
import { RegistrationComponent } from './views/users/registration/registration.component';
import {routing} from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    ProfileComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
