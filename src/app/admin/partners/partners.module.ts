import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { SuperstatementComponent } from './superstatement/superstatement.component';
import { SuperreportComponent } from './superreport/superreport.component';
import { SalereportComponent } from './salereport/salereport.component';
import { PartnerComponent } from './partner/partner.component';
import { PartnerrequestComponent } from './partnerrequest/partnerrequest.component';
import { SalesstatementComponent } from './salesstatement/salesstatement.component';
import { LeadgeneratorComponent } from './leadgenerator/leadgenerator.component';
import { MasterpartnerComponent } from './masterpartner/masterpartner.component';
import { SalesComponent } from './sales/sales.component';
import { SuperComponent } from './super/super.component';
import { PartnersComponent } from './partners/partners.component';


@NgModule({
  declarations: [
    SuperstatementComponent,
    SuperreportComponent,
    SalereportComponent,
    PartnerComponent,
    PartnerrequestComponent,
    SalesstatementComponent,
    SuperstatementComponent,
    LeadgeneratorComponent,
    MasterpartnerComponent,
    SalesComponent,
    SuperComponent,
    PartnersComponent

  ],
  imports: [
    CommonModule,
    PartnersRoutingModule
  ]
})
export class PartnersModule { }
