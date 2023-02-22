import { Component } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent {

  versionsform!: FormGroup;
  
  constructor(private formBuilder : FormBuilder , private activeroute:ActivatedRoute,private api:ApiService,  private router:Router,private toastr:ToastrService){
    this.versionsform = this.formBuilder.group({
      name: ['',Validators.required],
      pdf: ['',Validators.required],
      excel: ['',Validators.required],
      createdAt: new Date()
    })
  }
  published(){
    if(this.versionsform.valid){
     console.log(this.versionsform.value)
    this.api.postversion(this.versionsform.value).subscribe({
      next:(val:any)=>{
        this.versionsform.reset();
      }

    })
    }
    
 }
  
}
