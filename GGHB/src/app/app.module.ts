import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';

import {RouterModule, Routes} from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectComponent } from './project/project.component';
import { SprintComponent } from './sprint/sprint.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'listProjects', component: ListProjectsComponent},
  {path: 'createProject', component: CreateProjectComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'sprint', component: SprintComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', redirectTo: '/home', pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListProjectsComponent,
    CreateProjectComponent,
    ProjectComponent,
    SprintComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
