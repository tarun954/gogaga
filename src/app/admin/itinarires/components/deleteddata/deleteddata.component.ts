import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-deleteddata',
  templateUrl: './deleteddata.component.html',
  styleUrls: ['./deleteddata.component.css']
})
export class DeleteddataComponent implements OnInit {
  constructor(private api:ApiService){}
  displayedColumns: string[] = ['id refno raisedate', 'itinerary  formraiser sourcename', 'customername customernumber','destination tripdate passenger', 'action',];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  ngOnInit(): void {
    this.loaddelete();
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loaddelete(){
    this.api.gertestore().subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator = this.paginator;
      }
    })
  }
}
