import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PartnersigupComponent } from './partnersigup/partnersigup.component';
import { PartnerloginComponent } from './partnerlogin/partnerlogin.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: ':: Gogaga :: Holidays ::' },
  },
  {
    path: 'partnerlogin',
    component: PartnerloginComponent,
    data: { title: ':: Gogaga :: Holidays ::' },
  },
  {
    path:'signup',
    component:SignupComponent
  },{
    path:'partnersignup',
    component:PartnersigupComponent
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
