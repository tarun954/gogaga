import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { BookingformComponent } from '../bookings/bookingform/bookingform.component';
import { AdditinaryComponent } from './components/additinary/additinary.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { ModifyComponent } from './components/modify/modify.component';
import { PendingComponent } from './components/pending/pending.component';
import { SubmittedComponent } from './components/submitted/submitted.component';
import { VersionsComponent } from './components/versions/versions.component';
import { ViewformComponent } from './components/viewform/viewform.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ProceedComponent } from './components/proceed/proceed.component';
import { DeleteddataComponent } from './components/deleteddata/deleteddata.component';

const routes: Routes = [
  {
    path:'',
    component:ItineraryComponent,
    children: [
      {path: '',redirectTo:'additinerary',pathMatch:'full'},
      {
        path: 'additinerary',
        component: AdditinaryComponent,
        data: { title: ':: Gogaga Holidays :: AddItinerary ::' },
      },
      {
        path: 'pending',
        component: PendingComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'submitted',
        component: SubmittedComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },{
        path: 'deleted/:id',
        component: DeletedComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },{
        path: 'deleteddata',
        component: DeleteddataComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }
      ,{
        path: 'versions',
        component: VersionsComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'viewform/:id',
        component: ViewformComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'editform/:id',
        component: DialogComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'proceed/:id',
        component: ProceedComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },
      {
        path: 'addversion',
        component: ModifyComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItinariresRoutingModule { }
