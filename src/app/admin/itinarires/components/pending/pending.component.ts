import { DeletedComponent } from './../deleted/deleted.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../../services/api.service';
import { AdditinaryComponent } from '../additinary/additinary.component';
import { MatDialog } from '@angular/material/dialog'; 
import { Router } from '@angular/router';
import * as saveAs from 'file-saver';
import { ViewformComponent } from '../viewform/viewform.component';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
 
import { ThemeService } from '../../../../services/_theme.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit{
  data: any;
  dataid:any;  
  versionform!: FormGroup;
  
  id!: number;
  constructor(private formBuilder : FormBuilder,public dialoge: MatDialog,private api:ApiService,public dialog: MatDialog,private http:HttpClient,private router:Router,private toastr:ToastrService){
    this.versionform = this.formBuilder.group({
      name: ['',Validators.required],
      pdf: ['',Validators.required],
      excel: ['',Validators.required]
    })
  }
  displayedColumns: string[] = ['id refno raisedate', 'itinerary  formraiser sourcename', 'customername customernumber','destination tripdate passenger','assign', 'action','upload'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  ngOnInit(): void {
    this.loadItinerary();
}
 
 

 
 

  openDialog() {
    const dialogRef = this.dialog.open(DeletedComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
   
  
  
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadItinerary(){
    this.api.getItinerary().subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error(err) {
          console.log(err);
      },
    })
  }
   
  deleteitinerary(id:number){
    this.api.deleteItinerary(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.toastr.warning('Deleted');
        this.loadItinerary();  

      },error: console.log
    }) 
  }
   
  

   
  // downloadFile() {
  //   this.http.get('https://json-server-myna.onrender.com/itinerary', { responseType: 'blob' }).subscribe((res: any) => {
  //     saveAs(res, 'file.pdf');
  //   });
  // }
   
}
 

