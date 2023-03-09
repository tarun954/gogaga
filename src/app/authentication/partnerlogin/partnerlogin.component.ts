import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from 'src/app/services/partner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partnerlogin',
  templateUrl: './partnerlogin.component.html',
  styleUrls: ['./partnerlogin.component.css']
})
export class PartnerloginComponent {
  constructor(private builder: FormBuilder,private toastr:ToastrService,private partner:PartnerService,private router:Router){
    sessionStorage.clear()
  }
 ngOnInit(): void {
  
 }
 userdata:any;
 loginform = this.builder.group({
  partnername:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required)
 })
  proceedlogin(){
    if(this.loginform.valid){
    this.partner.Getcode(this.loginform.value.partnername).subscribe(res=>{
      this.userdata=res;
      console.log(this.userdata);
      if(this.userdata.password ===this.loginform.value.password){
        if(this.userdata.isactive){
          sessionStorage.setItem('partnername',this.userdata.id);
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
