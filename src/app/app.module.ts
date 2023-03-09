import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { TreeviewModule } from 'ngx-treeview';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ProgressBarModule } from 'angular-progress-bar'; 
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire/compat'; 
 

import { TreeviewMakerService } from './services/treeview-maker.service';
import { CoreModule } from './core/core.module';
import { MaterialModule } from 'src/Material-Module';
import { ToastrModule } from 'ngx-toastr'; 
import {NgChartsModule} from 'ng2-charts'; 
import { environment } from './envir/environment.prod'; 
  
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
import Swal from 'sweetalert2'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularFileUploaderModule } from "angular-file-uploader";  


@NgModule({
  declarations: [
    AppComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ProgressBarModule,
    FormsModule,
    AngularFileUploaderModule,
    MaterialModule,
    NgChartsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule, 
    NgOptimizedImage,
    DropDownListModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TreeviewModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule, 
    NgbModule,
    CoreModule,
    MatDialogModule, 
    NgApexchartsModule, 
    SweetAlert2Module, 
    // NgMultiSelectDropDownModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }), 

  ],
  providers: [TreeviewMakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
