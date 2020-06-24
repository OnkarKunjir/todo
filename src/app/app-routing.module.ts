import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TodoComponent } from './todo/todo.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '' , component: LandingPageComponent},
  {path: 'todo' , component: TodoComponent , canActivate: [AuthGuard] },  
  {path :'sign-up' , component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
