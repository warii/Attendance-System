

// import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import {ClassesComponent} from './components/classes/classes.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    component: ClassesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
