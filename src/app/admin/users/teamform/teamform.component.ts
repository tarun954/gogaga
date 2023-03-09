import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamform',
  templateUrl: './teamform.component.html',
  styleUrls: ['./teamform.component.css']
})
export class TeamformComponent {
  constructor(private builder: FormBuilder,private service:AuthService,private api:ApiService,
     private toastr:ToastrService,private router:Router,
     ){}
  rolelist:any;
  teamlist:any;
  teamform = this.builder.group({ 
    name:this.builder.control(''), 
    team: this.builder.control('',Validators.required),
    role:this.builder.control('',Validators.required),
  })
  role = [
    {
      "name": "Dom Team Lead",
      "code": "dom team lead"
    },
    {
      "name": "Int Team Lead",
      "code": "int team lead"
    },
    {
      "name": "Dom",
      "code": "Dom"
    },
    {
      "name": "Int",
      "code": "int"
    },
    {
      "name": "Operations",
      "code": "operations"
    },
    {
      "name": "Accounts",
      "code": "accounts"
    },
    {
      "name": "Admin",
      "code": "admin"
    },
    {
      "name": "HRAdmin",
      "code": "hradmin"
    }
  ]
  team= [
    {
      "name": "Team 1",
      "code": "Team 1"
    },
    {
      "name": "Team 2",
      "code": "Team 2"
    },
    {
      "name": "Team 3",
      "code": "Team 3"
    },
    {
      "name": "Team 4",
      "code": "Team 4"
    },
    {
      "name": "Team 5",
      "code": "Team 5"
    }
  ]
  editdata:any;
  ngOnInit(): void {
     
  }
  updateuser(){
    if(this.teamform.valid){
      this.api.postteam(this.teamform.value).subscribe({
        next:(val:any)=>{  
        this.toastr.success('Itinerary Created');
        this.router.navigate(['/admin/users/team']) 
        this.teamform.reset();
        
      }
    })
    }else{
      this.toastr.warning("Please Select Role.")
    }
  }
}
