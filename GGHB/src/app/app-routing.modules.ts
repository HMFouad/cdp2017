import { AuthGuard } from './../../server/services/authGuard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListProjectsComponent } from './listProjects/listProjects.component';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { CreateUsComponent } from './create-us/create-us.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import {InviteToProjectComponent} from './invite-to-project/invite-to-project.component';
import {ListSprintsComponent} from './list-sprints/list-sprints.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'listProjects', component: ListProjectsComponent},
  {path: 'createProject', component: CreateProjectComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'createSprint', component: CreateSprintComponent},
  {path: 'createUs', component: CreateUsComponent},
  {path: 'createTask', component: CreateTaskComponent},
  {path: 'listSprints', component: ListSprintsComponent},
  {path: 'createSprint', component: CreateSprintComponent},
  {path: 'createUs', component: CreateUsComponent},
  {path: 'inviteToProject', component: InviteToProjectComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

export const AppRoutingModule = RouterModule.forRoot(
  appRoutes,
  { useHash: true }
);
