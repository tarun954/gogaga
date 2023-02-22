import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support/support.component';
import { EscalationsComponent } from './escalations/escalations.component';
import { EscalationsformComponent } from './escalationsform/escalationsform.component';
import { OfficedesignComponent } from './officedesign/officedesign.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../Material-Module';


@NgModule({
  declarations: [
    SupportComponent,
    EscalationsComponent,
    EscalationsformComponent,
    OfficedesignComponent,
    MarketingComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class SupportModule { }
