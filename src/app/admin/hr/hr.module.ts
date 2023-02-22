import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrdashboardComponent } from './hrdashboard/hrdashboard.component';
import { AttendaceComponent } from './attendace/attendace.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpsalaryComponent } from './empsalary/empsalary.component';
import { DepartmentsComponent } from './departments/departments.component';
import { LeavereqComponent } from './leavereq/leavereq.component';
import { HrComponent } from './hr/hr.component';
import { RecieptsComponent } from './reciepts/reciepts.component';


@NgModule({
  declarations: [
    HrdashboardComponent,
    AttendaceComponent,
    HolidaysComponent,
    EmplistComponent,
    EmpsalaryComponent,
    DepartmentsComponent,
    LeavereqComponent,
    HrComponent,
    RecieptsComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
