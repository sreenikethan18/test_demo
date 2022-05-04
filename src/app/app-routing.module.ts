import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './model/home/home.component';

import { TaskComponent } from './model/task/task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './model/contact/contact.component';
import { UpdateComponent } from './model/update/update.component';
// import { TodoComponent } from './todo/todo.component';




const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"task",component:TaskComponent},
  {path:"Login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  // {path:"schedule",component:TodoComponent}
  {path:'update/:id',component:UpdateComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
