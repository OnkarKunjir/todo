import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TodoComponent } from './todo/todo.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path: '' , component: LandingPageComponent},
  {path: 'account' , component: TodoComponent}, // chage to todo 
  {path :'sign-up' , component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
