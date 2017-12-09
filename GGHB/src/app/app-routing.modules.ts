import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  //{path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

export const AppRoutingModule = RouterModule.forRoot(
  appRoutes,
  { useHash: true }
);
