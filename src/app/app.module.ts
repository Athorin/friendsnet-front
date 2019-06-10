import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

import { ProfileComponent } from './display/profile/profile.component';
import { DisplayComponent } from './display/display.component';

import { WallComponent } from './display/wall/wall.component';
import { PostsComponent } from './display/wall/posts/posts.component';
import { PeopleComponent } from './display/wall/people/people.component';
import { GroupComponent } from './display/wall/group/group.component';
import { EventComponent } from './display/wall/event/event.component';

import { GroupService } from './display/wall/group/group.service';
import { PeopleListService } from './display/wall/people/people.service';
import { EventService } from './display/wall/event/event.service';
import { PostsService } from './display/wall/posts/posts.service';
import { RightNavComponent } from './right-nav/right-nav.component';

const routes: Routes = [
    { path: '', redirectTo: '/post', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'person', component: PeopleComponent },
    { path: 'post', component: PostsComponent },
    { path: 'group', component: GroupComponent },
    { path: 'event', component: EventComponent },
// { path: 'dashboard', component: DashboardComponent }
  ];

@NgModule({
   declarations: [
      AppComponent,
      HomeNavComponent,
      PeopleComponent,
      LeftNavComponent,
      ProfileComponent,
      DisplayComponent,
      WallComponent,
      PostsComponent,
      GroupComponent,
      EventComponent,
      RightNavComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
   ],
   providers: [
      PeopleListService,
      GroupService,
      EventService,
      PostsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
