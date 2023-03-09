import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { OperationsreportComponent } from './operationsreport/operationsreport.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { ProductreportComponent } from './productreport/productreport.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/Material-Module';


@NgModule({
  declarations: [
    ReportsComponent,
    OperationsreportComponent,
    SalesreportComponent,
    ProductreportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
    ]
})
export class ReportsModule { }
