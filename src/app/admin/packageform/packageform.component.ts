import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-packageform',
  templateUrl: './packageform.component.html',
  styleUrls: ['./packageform.component.css']
})
export class PackageformComponent {
  packageform!:FormGroup;
  constructor(private api:ApiService,private formBuilder:FormBuilder,private toastr:ToastrService, 
    private router:Router){
      this.packageform = this.formBuilder.group({
        title:'',
        price:'',
        duration:'',
        cities:'',
        reviews:'',
        overview:'',
        validity:'',
        image:'',
        file:''
      })
    }
    addpackage(){
      if(this.packageform.valid){
        console.log(this.packageform.value);
        
      }
    }
}
