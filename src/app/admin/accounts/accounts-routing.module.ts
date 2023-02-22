import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsformComponent } from './accountsform/accountsform.component';
import { CashinflowoutflowComponent } from './cashinflowoutflow/cashinflowoutflow.component';
import { FinancialComponent } from './financial/financial.component';
import { PartnerpayoutsComponent } from './partnerpayouts/partnerpayouts.component';
import { ShortfallformComponent } from './shortfallform/shortfallform.component';
import { ShortfallsComponent } from './shortfalls/shortfalls.component';

const routes: Routes = [
  {
    path:'',
    component:AccountsComponent,
    children: [
      {path: '',redirectTo:'accounts',pathMatch:'full'},
      {
        path: 'accountsform',
        component: AccountsformComponent,
        data: { title: ':: Gogaga Holidays :: AddItinerary ::' },
      },
      {
        path: 'partnerpayouts',
        component: PartnerpayoutsComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'shortfalls',
        component: ShortfallsComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },{
        path: 'shortfallform',
        component: ShortfallformComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },{
        path: 'inflowoutflow',
        component: CashinflowoutflowComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'financial',
        component: FinancialComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
