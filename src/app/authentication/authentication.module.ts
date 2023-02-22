import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { MaterialModule } from 'src/Material-Module';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LoginComponent,
    ErrorpageComponent,
    SignupComponent,
    AuthComponent,
    UpdatepopupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class AuthenticationModule { }
