import { ClientComponent } from './client/client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerSupportRoutingModule } from './customer-support-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { ClientformComponent } from './clientform/clientform.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomersupportComponent,
    ClientComponent,
    ClientformComponent
  ],
  imports: [
    CommonModule,
    CustomerSupportRoutingModule
  ]
})
export class CustomerSupportModule { }
