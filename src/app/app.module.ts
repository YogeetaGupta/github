import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { UserFollowerComponent } from './user-follower/user-follower.component';
import { UserFollowerServices } from './user-follower/user-follower.services';
import { User} from './user-follower/user';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UserFollowerComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    HttpModule, FormsModule,
    ReactiveFormsModule


  ],
  providers: [UserFollowerServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
