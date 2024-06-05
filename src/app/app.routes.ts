import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
  {
    path: '',
    title: "Home",
    component: HomeComponent
  },
  {
    path: 'users',
    title: "Users",
    component: UserListComponent
  },
  {
    path: 'addEditUser',
    title: "Add / Edit User",
    component: UserFormComponent
  }
];
