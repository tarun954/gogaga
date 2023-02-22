import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';

import { AdminRoutingModule } from './admin-routing.module';
import { LeftbarComponent } from './layout/leftbar/leftbar.component';
import { RightbarComponent } from './layout/rightbar/rightbar.component';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import { AdminComponent } from './layout/admin/admin.component';
import { LeadsComponent } from './leads/leads.component';
import { AddleadsComponent } from './addleads/addleads.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from "../core/core.module";
import { ProductlistComponent } from './productlist/productlist.component';
import { PackageformComponent } from './packageform/packageform.component';  
import { MaterialModule } from 'src/Material-Module'; 
import { ProgressBarModule } from 'angular-progress-bar';
import { NgChartsModule } from 'ng2-charts';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';

@NgModule({
    declarations: [
        LeftbarComponent,
        RightbarComponent,
        TopMenuComponent,
        SidenavComponent,
        AdminComponent,
        LeadsComponent,
        AddleadsComponent,
        DashboardComponent,
        ProductlistComponent,
        PackageformComponent,
        DialogComponent, 
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        HttpClientModule,
        ProgressBarModule,
        AngularFileUploaderModule, 
        NgChartsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        MatDialogModule,
        NgApexchartsModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        CoreModule
    ]
})
export class AdminModule { }
