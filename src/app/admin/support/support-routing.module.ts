import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support/support.component';
import { EscalationsComponent } from './escalations/escalations.component';
import { EscalationsformComponent } from './escalationsform/escalationsform.component';
import { MarketingComponent } from './marketing/marketing.component';
import { OfficedesignComponent } from './officedesign/officedesign.component';

const routes: Routes = [
  {
    path:'',
    component: SupportComponent,
    children: [
      { path: '', redirectTo: 'support', pathMatch: 'full' },
      {
        path: 'escalations',
        component: EscalationsComponent
      },{
        path: 'escalationsform',
        component: EscalationsformComponent
      },
      {
        path: 'marketing',
        component: MarketingComponent
      },
      {
        path: 'officedesign',
        component: OfficedesignComponent
      },
    ]

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
