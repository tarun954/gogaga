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


@NgModule({
  declarations: [ 
    UserpermissionsComponent,
    UsertableComponent,
    TeamComponent,
    RoleComponent,
    PendingComponent,
    UserComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
