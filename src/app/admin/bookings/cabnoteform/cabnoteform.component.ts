import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cabnoteform',
  templateUrl: './cabnoteform.component.html',
  styleUrls: ['./cabnoteform.component.css']
})
export class CabnoteformComponent {
  cabnoteform!:FormGroup;
  constructor(private api:ApiService,private formBuilder:FormBuilder,private toastr:ToastrService, 
    private router:Router){
      this.cabnoteform = this.formBuilder.group({
        location:'',
        supplier:'',
        contact:'',
        credit:'',
        present:'',
        amount:'',
        valid:''
      })
    }
    addpackage(){
      if(this.cabnoteform.valid){
        console.log(this.cabnoteform.value);
        
      }
    }
}
