import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent {
  data: any;
  dataid:any;  
  versionform!: FormGroup;
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
 
 

 
 

   
   
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadItinerary(){
    this.api.getsubmit().subscribe({
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
   
}
