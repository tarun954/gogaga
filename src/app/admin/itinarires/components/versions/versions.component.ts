import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {
  constructor(private api:ApiService){
     
  }
  ngOnInit(): void {
    this.loadversions()
    this.load();
    
  }
  displayedColumns: string[] = ['pdf','excel'];
  displayedColumn: string[] = ['name','customername','pdf','excel','createdAt'];
  dataSource!: MatTableDataSource<any>;
  data!: MatTableDataSource<any>;
  loadversions(){
    this.api.getsubmit().subscribe({
      next:(res)=>{
        console.log(res) 
        this.dataSource = new MatTableDataSource(res);
      }
    })
  }
 
  load(){
    this.api.getversion().subscribe({
      next:(res)=>{
        console.log(res)
        this.data = new MatTableDataSource(res);
      }
    })
  }
}
