import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { VoucherComponent } from './voucher/voucher.component';
import { BookingComponent } from './booking/booking.component';
import { CabcreditnoteComponent } from './cabcreditnote/cabcreditnote.component';
import { CabnoteformComponent } from './cabnoteform/cabnoteform.component';
import { CanceledComponent } from './canceled/canceled.component';
import { CaseComponent } from './case/case.component';
import { ConfirmendComponent } from './confirmend/confirmend.component';
import { CreditnoteformComponent } from './creditnoteform/creditnoteform.component';
import { CreditnotesComponent } from './creditnotes/creditnotes.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { VoucherformComponent } from './voucherform/voucherform.component';
import { QualityComponent } from './quality/quality.component';
import { IntbookComponent } from './intbook/intbook.component';

const routes: Routes = [
  {
    path:'',
    component:BookingComponent,
    children: [
      {path: '',redirectTo:'bookings',pathMatch:'full'},
      {
        path:'dombookingform/:id',
        component:BookingformComponent,
      },
      {
        path:'intbookingform/:id',
        component: IntbookComponent,
      },
      {
        path: 'confirmed',
        component: ConfirmendComponent,
        data: { title: ':: Gogaga Holidays :: Confirmed ::' },
      },
      {
        path: 'qualityanalysis/:id',
        component: QualityComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'caseanalysis',
        component: CaseComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'payment/:id',
        component: PaymentComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path:'paymentform',
        component:PaymentformComponent
      },{
        path: 'hotelcreditnotes',
        component: CreditnotesComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },{
        path: 'hotelcreditnotesform',
        component: CreditnoteformComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
       
      {
        path: 'cabcreditnotes',
        component: CabcreditnoteComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'cabcreditnotesform',
        component: CabnoteformComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },{
        path: 'cancel',
        component: CanceledComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path:'voucherform/:id',
        component:VoucherformComponent
      },
      {
        path: 'voucher',
        component: VoucherComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
