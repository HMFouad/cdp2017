import { AppRoutingModule } from './app-routing.modules';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


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
    CreateUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
