import { HttpClient } from '@angular/common/http';
import { Component, Type, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';  
import {Router} from '@angular/router'
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {   
  constructor(private builder: FormBuilder,private toastr:ToastrService,private service:AuthService,private router:Router){
    sessionStorage.clear()
  }
 ngOnInit(): void {
  
 }
 userdata:any;
 loginform = this.builder.group({
  username:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required)
 })
  proceedlogin(){
    if(this.loginform.valid){
    this.service.Getbycode(this.loginform.value.username).subscribe(res=>{
      this.userdata=res;
      console.log(this.userdata);
      if(this.userdata.password ===this.loginform.value.password){
        if(this.userdata.isactive){
          sessionStorage.setItem('username',this.userdata.id);
          sessionStorage.setItem('role',this.userdata.role);
          this.router.navigate(['/admin/dashboard'])
        }else{
          this.toastr.error('Please Contact Admin','In Active User');
        }
      }else{
        this.toastr.error('Invalid Credentials');
      }
    }) 
  }
  }
  

}
