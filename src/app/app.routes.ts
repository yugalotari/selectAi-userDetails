import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', loadComponent: () => import('./pages/user-details/user-details.component').then(m => m.UserDetailsComponent) },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'users' },
  
];
