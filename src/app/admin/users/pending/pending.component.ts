import { AuthService } from '../../../services/auth.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../../../authentication/updatepopup/updatepopup.component';
 
 
 
 
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
  
  constructor(private service:AuthService, private dialog:MatDialog){
        this.Loaduser();
  }
  userlist:any;
  dataSource:any;
  Loaduser(){
    this.service.GetAll().subscribe(res=>{
      this.userlist = res;
      this.dataSource=new MatTableDataSource(this.userlist);  
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
    }) 
  }
  displayedColumns: string[] = ['username', 'name', 'email','role','status', 'action'];
  role= [
    {
      "name": "Dom Team Lead",
      "value": "dom team lead"
    },
    {
      "name": "Int Team Lead",
      "value": "int team lead"
    },
    {
      "name": "Dom",
      "value": "Dom"
    },
    {
      "name": "Int",
      "value": "int"
    },
    {
      "name": "Operations",
      "value": "operations"
    },
    {
      "name": "Accounts",
      "value": "accounts"
    },
    {
      "name": "Admin",
      "value": "admin"
    },
    {
      "name": "HR",
      "value": "hr"
    }
  ]

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  UpdateUser(id:any){ 
    const popup = this.dialog.open(UpdatepopupComponent,{
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      width: '50%',
      data:{
        usercode:id
      }
    })
    popup.afterClosed().subscribe(res=>{
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

 
