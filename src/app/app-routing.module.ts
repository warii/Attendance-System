

// import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import {ClassesComponent} from './components/classes/classes.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttendComponent} from './components/attend/attend.component';
import {AttendedComponent} from './components/attended/attended.component';

// Defines the components which are placed in the route for each path.
const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
  },
  {
    path: 'classes',
    component: ClassesComponent,
  },
  {
    path: 'attend',
    component: AttendComponent,
  },
  {
    path: 'attended',
    component: AttendedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
