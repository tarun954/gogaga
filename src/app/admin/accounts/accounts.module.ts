import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { CashinflowoutflowComponent } from './cashinflowoutflow/cashinflowoutflow.component';
import { PartnerpayoutsComponent } from './partnerpayouts/partnerpayouts.component';
import { ShortfallformComponent } from './shortfallform/shortfallform.component';
import { ShortfallsComponent } from './shortfalls/shortfalls.component';
import { AccountsformComponent } from './accountsform/accountsform.component';
import { FinancialComponent } from './financial/financial.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../Material-Module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountsComponent,
    CashinflowoutflowComponent,
    FinancialComponent,
    PartnerpayoutsComponent,
    ShortfallformComponent,
    ShortfallsComponent,
    AccountsformComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule { }
