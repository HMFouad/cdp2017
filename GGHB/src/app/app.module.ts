import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import {CreateUsComponent } from './createUs/create-us.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectComponent } from './project/project.component';
import { SprintComponent } from './sprint/sprint.component';
import { InviteProjectComponent } from './invite-project/invite-project.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'listProjects', component: ListProjectsComponent},
  {path: 'createProject', component: CreateProjectComponent},
  {path: 'createUs', component: CreateUsComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'sprint', component: SprintComponent},
  {path: 'inviteProject', component: InviteProjectComponent},
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
    CreateUsComponent,
    ProjectComponent,
    SprintComponent,
    InviteProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
