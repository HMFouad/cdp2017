import {AuthGuard, HomeAuthGuard} from './../../server/services/authGuard';
import {Routes, RouterModule, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
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
import {ListTasksComponent} from './list-tasks/list-task.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [HomeAuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'listProjects', component: ListProjectsComponent, canActivate: [AuthGuard]},
  {path: 'createProject', component: CreateProjectComponent, canActivate: [AuthGuard]},
  {path: 'project', component: ProjectComponent, canActivate: [AuthGuard]},
  {path: 'createSprint', component: CreateSprintComponent, canActivate: [AuthGuard]},
  {path: 'createUs', component: CreateUsComponent, canActivate: [AuthGuard]},
  {path: 'createTask', component: CreateTaskComponent, canActivate: [AuthGuard]},
  {path: 'listSprints', component: ListSprintsComponent, canActivate: [AuthGuard]},
    {path: 'listTasks', component: ListTasksComponent, canActivate: [AuthGuard]},
  {path: 'createSprint', component: CreateSprintComponent, canActivate: [AuthGuard]},
  {path: 'createUs', component: CreateUsComponent, canActivate: [AuthGuard]},
  {path: 'inviteToProject', component: InviteToProjectComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

export const AppRoutingModule = RouterModule.forRoot(
  appRoutes,
  { useHash: true }
);
