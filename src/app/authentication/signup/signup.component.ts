import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private builder: FormBuilder,private toastr:ToastrService,private service:AuthService,private router:Router){}
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
      this.service.Proceedreg(this.registerform.value).subscribe(res=>{
        this.toastr.success("Please Contact Admin for enabling Access","Registered Successfully")
        this.router.navigate([''])
      })
    }else{
      this.toastr.warning('Please enter Valid data');
    }
  }
}
