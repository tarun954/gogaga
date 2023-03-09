import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module'; 
import { UserpermissionsComponent } from './userpermissions/userpermissions.component';
import { UsertableComponent } from './usertable/usertable.component';
import { TeamComponent } from './team/team.component';
import { RoleComponent } from './role/role.component';
import { PendingComponent } from './pending/pending.component';
import { MaterialModule } from '../../../Material-Module';
import { FormsComponent } from '../../forms/forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TeamformComponent } from './teamform/teamform.component';


@NgModule({
  declarations: [ 
    UserpermissionsComponent,
    UsertableComponent,
    TeamComponent,
    RoleComponent,
    PendingComponent,
    UserComponent,
    TeamformComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    MaterialModule

  ]
})
export class UsersModule { }
