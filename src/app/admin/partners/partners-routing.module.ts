import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnersComponent } from './partners/partners.component';
import { PartnerComponent } from './partner/partner.component';
import { PartnerformComponent } from './partnerform/partnerform.component';
import { PartnerrequestComponent } from './partnerrequest/partnerrequest.component';
import { LeadgeneratorComponent } from './leadgenerator/leadgenerator.component';
import { MasterpartnerComponent } from './masterpartner/masterpartner.component';
import { SalesComponent } from './sales/sales.component';
import { SalesreportComponent } from '../reports/salesreport/salesreport.component';
import { SuperComponent } from './super/super.component';
import { SalesstatementComponent } from './salesstatement/salesstatement.component';
import { SuperstatementComponent } from './superstatement/superstatement.component';
import { SuperreportComponent } from './superreport/superreport.component';

const routes: Routes = [
  {
    path:'',
    component: PartnersComponent,
    children: [
      { path: '', redirectTo: 'partner', pathMatch: 'full' },
      {
        path: 'partnerrequest',
        component: PartnerrequestComponent
      },{
        path: 'addpartner',
        component: PartnerformComponent
      },
      {
        path: 'leadgenerator',
        component: LeadgeneratorComponent
      },
      {
        path:'masterpartner',
        component: MasterpartnerComponent
      },
      {
        path: 'salespartner',
        component: SalesComponent
      },
      {
        path: 'salesreport',
        component: SalesreportComponent
      },
      {
        path: 'superpartnerreport',
        component: SuperreportComponent
      }, 
      {
        path: 'salestatement',
        component: SalesstatementComponent
      },
      {
        path: 'superstatement',
        component: SuperstatementComponent
      },
      {
        path: 'partnerform',
        component: PartnerformComponent
      },
      {
        path: 'superpartner',
        component: SuperComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersRoutingModule { }
