import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingComponent } from './booking/booking.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { CabcreditnoteComponent } from './cabcreditnote/cabcreditnote.component';
import { CabnoteformComponent } from './cabnoteform/cabnoteform.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { PaymentComponent } from './payment/payment.component';
import { VoucherComponent } from './voucher/voucher.component';
import { VoucherformComponent } from './voucherform/voucherform.component';
import { CaseComponent } from './case/case.component';
import { CanceledComponent } from './canceled/canceled.component';
import { ConfirmendComponent } from './confirmend/confirmend.component';
import { CreditnoteformComponent } from './creditnoteform/creditnoteform.component';
import { CreditnotesComponent } from './creditnotes/creditnotes.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QualityComponent } from './quality/quality.component';
import { MaterialModule } from '../../../Material-Module';
import { IntbookComponent } from './intbook/intbook.component';


@NgModule({
  declarations: [
    BookingComponent,
    BookingformComponent,
    CabcreditnoteComponent,
    CabnoteformComponent,
    PaymentformComponent,
    PaymentComponent,
    VoucherComponent,
    VoucherformComponent,
    CaseComponent,
    CanceledComponent,
    ConfirmendComponent,
    CreditnoteformComponent,
    CreditnotesComponent,
    InvoiceComponent,
    QualityComponent,
    IntbookComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class BookingsModule { }
