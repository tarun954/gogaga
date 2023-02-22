import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsreportComponent } from './operationsreport/operationsreport.component';
import { ProductreportComponent } from './productreport/productreport.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesreportComponent } from './salesreport/salesreport.component';

const routes: Routes = [
  {
    path:'',
    component:ReportsComponent,
    children: [
      {path: '',redirectTo:'reports',pathMatch:'full'},
      {
        path: 'salesreport',
        component: SalesreportComponent,
        data: { title: ':: Gogaga Holidays :: AddItinerary ::' },
      },
      {
        path: 'operationsreport',
        component: OperationsreportComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }, 
      {
        path: 'productreport',
        component: ProductreportComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
