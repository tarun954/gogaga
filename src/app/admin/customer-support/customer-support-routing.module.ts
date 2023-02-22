import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ClientComponent } from './client/client.component';
import { ClientformComponent } from './clientform/clientform.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';

const routes: Routes = [
  {
    path:'',
    component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'customersupport', pathMatch: 'full' },
      {
        path: 'client',
        component: ClientComponent
      },{
        path: 'clientform',
        component: ClientformComponent
      },
      {
        path: 'trips',
        component: CustomersupportComponent
      },
    ]

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSupportRoutingModule { }
