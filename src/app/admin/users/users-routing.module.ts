import { UserpermissionsComponent } from './userpermissions/userpermissions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UsertableComponent } from './usertable/usertable.component';
import { TeamComponent } from './team/team.component';
import { RoleComponent } from './role/role.component';
import { PendingComponent } from './pending/pending.component';
import { RoleformComponent } from './roleform/roleform.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component: UserComponent,
    children: [
      {path: '',redirectTo:'users',pathMatch:'full'},
      {
        path: 'userpermission',
        component: UserpermissionsComponent,
        data: { title: ':: Gogaga Holidays :: AddItinerary ::' },
      },
      {
        path: 'usertable',
        component: UsertableComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }, 
      {
        path: 'team',
        component: TeamComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }, 
      {
        path: 'role',
        component: RoleComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }, 
      {
        path: 'roleform',
        component: RoleformComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },  
      {
        path:'pending',
        component:PendingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
