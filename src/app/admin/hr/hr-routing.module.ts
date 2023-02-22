import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr/hr.component';
import { HrdashboardComponent } from './hrdashboard/hrdashboard.component';
import { AttendaceComponent } from './attendace/attendace.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeavereqComponent } from './leavereq/leavereq.component';
import { RecieptsComponent } from './reciepts/reciepts.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpsalaryComponent } from './empsalary/empsalary.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  {
    path:'',
    component: HrComponent,
    children: [
      { path: '', redirectTo: 'hr', pathMatch: 'full' },
      {
        path: 'hrdashboard',
        component: HrdashboardComponent
      },{
        path: 'attendance',
        component: AttendaceComponent
      },
      {
        path: 'holidays',
        component: HolidaysComponent
      },
      {
        path:'leaverequest',
        component: LeavereqComponent
      },
      {
        path: 'salaryslip',
        component: RecieptsComponent
      },
      {
        path: 'employeelist',
        component: EmplistComponent
      },
      {
        path: 'employeesalary',
        component: EmpsalaryComponent
      }, {
        path: 'department',
        component: DepartmentsComponent
      }, 
       

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
