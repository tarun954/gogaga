import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partnersigup',
  templateUrl: './partnersigup.component.html',
  styleUrls: ['./partnersigup.component.css']
})
export class PartnersigupComponent {
  constructor(private builder: FormBuilder,private toastr:ToastrService,private partner:PartnerService,private router:Router){}
  registerform = this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    role:this.builder.control(''),
    isactive:this.builder.control(false),
    password:this.builder.control('',Validators.required)
  })
  proceedreg(){
    if(this.registerform.valid){
      this.partner.Proceed(this.registerform.value).subscribe(res=>{
        this.toastr.success("Please Contact Admin for enabling Access","Registered Successfully")
        this.router.navigate([''])
      })
    }else{
      this.toastr.warning('Please enter Valid data');
    }
  }
}
