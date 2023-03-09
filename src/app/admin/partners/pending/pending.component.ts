import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'; 
import { MatDialog } from '@angular/material/dialog'; 
import { MatTableDataSource } from '@angular/material/table';
import { PartnerService } from 'src/app/services/partner.service';
import { PartnerpopComponent } from 'src/app/authentication/partnerpop/partnerpop.component';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
  constructor(private partner:PartnerService, private dialog:MatDialog){
    this.Loaduser();
}
userlist:any;
dataSource:any;
Loaduser(){
this.partner.GetAll().subscribe((res: any)=>{
  this.userlist = res;
  this.dataSource=new MatTableDataSource(this.userlist);  
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort; 
}) 
}
displayedColumns: string[] = ['username', 'name', 'email','role','status', 'action'];
role= [
{
  "name": "Super Parner",
  "value": "Super Parner"
},
{
  "name": "Sales Partner",
  "value": "Sales Partner"
},
{
  "name": "Master Partner",
  "value": "Master Partner"
},
{
  "name": "Lead Generator",
  "value": "Lead Generator"
} 
]

@ViewChild(MatPaginator)paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
UpdateUser(id:any){ 
const popup = this.dialog.open(PartnerpopComponent,{
  enterAnimationDuration:'500ms',
  exitAnimationDuration:'500ms',
  width: '50%',
  data:{
    usercode:id
  }
})
popup.afterClosed().subscribe((res)=>{
  this.Loaduser();
})
}
opendialog(){

}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();

if (this.dataSource.paginator) {
  this.dataSource.paginator.firstPage();
}
}
}
