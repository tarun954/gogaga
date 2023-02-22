import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { OperationsreportComponent } from './operationsreport/operationsreport.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { ProductreportComponent } from './productreport/productreport.component';


@NgModule({
  declarations: [
    ReportsComponent,
    OperationsreportComponent,
    SalesreportComponent,
    ProductreportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
