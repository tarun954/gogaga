import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatCardModule} from'@angular/material/card';
import { MatSelectModule } from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio'
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogActions, MatDialogContent, MatDialogModule} from"@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
    exports:[
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSidenavModule,
        MatDialogModule,
        MatRadioModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatDialogModule, 
        MatMenuModule,
        // TagInputModule
        MatChipsModule

    ]
})
export class MaterialModule{

}