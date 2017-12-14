import { AppRoutingModule } from './app-routing.modules';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {AuthGuard, HomeAuthGuard} from "../../server/services/authGuard";


import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListProjectsComponent } from './listProjects/listProjects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectComponent } from './project/project.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateUsComponent } from './create-us/create-us.component';
import { InviteToProjectComponent } from './invite-to-project/invite-to-project.component';
import { ListSprintsComponent } from './list-sprints/list-sprints.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ListProjectsComponent,
    CreateProjectComponent,
    ProjectComponent,
    CreateSprintComponent,
    CreateTaskComponent,
    CreateUsComponent,
    InviteToProjectComponent,
    ListSprintsComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, HomeAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
