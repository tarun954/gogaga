import { Component, ViewChild, OnInit } from '@angular/core';
import { financialmodel } from '../model/financialmodel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit{
  constructor(private api:ApiService){}
  displayedColumns: string[] = ['transactionnumber','ghrn','transactiondate','transactionparticular','transactiontype','type','balance'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
      this.getFinancial();
  }
 

 
  getFinancial(){
    this.api.getfinancial().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
