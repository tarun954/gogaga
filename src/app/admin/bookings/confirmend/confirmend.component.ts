import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirmend',
  templateUrl: './confirmend.component.html',
  styleUrls: ['./confirmend.component.css']
})
export class ConfirmendComponent implements OnInit {
  data: any;
  dataid:any;  
  versionform!: FormGroup;
  
  id!: number;
  constructor(private formBuilder : FormBuilder,private api:ApiService,private router:Router,private toastr:ToastrService){
    
  }
  displayedColumns: string[] = ['id','customername customernumber','destination tripdate passenger', 'action','remove'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  ngOnInit(): void {
     this.loadBooking();
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadBooking(){
    
    this.api.getBooking().subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error(err: any) {
          console.log(err);
      },
    })
  }
}
