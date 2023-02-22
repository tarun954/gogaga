import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinariresRoutingModule } from './itinarires-routing.module';
import { AdditinaryComponent } from './components/additinary/additinary.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { PendingComponent } from './components/pending/pending.component';
import { SubmittedComponent } from './components/submitted/submitted.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { VersionsComponent } from './components/versions/versions.component';
import { ModifyComponent } from './components/modify/modify.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../Material-Module';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { ViewformComponent } from './components/viewform/viewform.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProceedComponent } from './components/proceed/proceed.component';
import { DeleteddataComponent } from './components/deleteddata/deleteddata.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AdditinaryComponent,
    ItineraryComponent,
    PendingComponent,
    SubmittedComponent,
    VersionsComponent,
    DeletedComponent,
    ModifyComponent,
    DialogComponent,
    ViewformComponent,
    ModalComponent,
    ProceedComponent,
    DeleteddataComponent 
  ],
  imports: [
    CommonModule,
    ItinariresRoutingModule,
    AngularFileUploaderModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule,
    NgMultiSelectDropDownModule
  ]
})
export class ItinariresModule { }
