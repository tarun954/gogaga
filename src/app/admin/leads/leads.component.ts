import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  displayedColumns: string[] = ['customername','customerphone','startdate','destination','itinerary','raisedby','raisedon','actions','remind'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : ApiService,private modalService: NgbModal,public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.getAllLeads();
  }
  animal!: string;
  name!: string;
  time!:  Date

  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '250px',
      width: '500px',
      data: {name: this.name, animal: this.animal,time:this.time},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  
  getAllLeads(){
    this.api.getLead().subscribe({
      next:(res)=>{
         this.dataSource = new MatTableDataSource(res);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Error while fetching the records")
      }
    })
  }
   
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
 