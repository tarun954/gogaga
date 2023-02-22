import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: ':: Gogaga :: Holidays ::' },
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path: '**',
    component: ErrorpageComponent,
    data: { title: ':: Gogaga :: Holidays ::' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
