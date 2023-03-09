import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent {
  data: any;
  dataid:any;   
  
  id!: number;
  constructor( private api:ApiService,private http:HttpClient,private toastr:ToastrService){
     
  }
  displayedColumns: string[] = ['teamname', 'itinerary', 'submitted','target','netcost','afc', 'achievement','totalp','achievementper'];
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
    this.api.getpayable().subscribe({
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
 
}
