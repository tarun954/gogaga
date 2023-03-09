import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productreport',
  templateUrl: './productreport.component.html',
  styleUrls: ['./productreport.component.css']
})
export class ProductreportComponent {
  data: any;
  dataid:any;   
  
  id!: number;
  constructor( private api:ApiService,private http:HttpClient,private toastr:ToastrService){
     
  }
  displayedColumns: string[] = ['executive','totalfcost','totallcost','totalp'];
  dataSource!: MatTableDataSource<any>;
  displayedColumn: string[] = ['id','createdAt','partner','customername','customernumber','destination','passenger'];
  dataSources!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  ngOnInit(): void {
    this.loadItinerary();
    this.loadsubmit();
    
}
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadItinerary(){
    this.api.getBooking().subscribe({
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
  loadsubmit(){
    this.api.getsubmit().subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSources = new MatTableDataSource(res);
        this.dataSources.sort= this.sort;
        this.dataSources.paginator = this.paginator;
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
}
