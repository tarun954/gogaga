import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PartnerService } from 'src/app/services/partner.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-partnerpop',
  templateUrl: './partnerpop.component.html',
  styleUrls: ['./partnerpop.component.css']
})
export class PartnerpopComponent {
  constructor(private builder: FormBuilder,private partner:PartnerService,
    @Inject(MAT_DIALOG_DATA) public data:any,private toastr:ToastrService,
    private dialog:MatDialogRef<PartnerpopComponent>){}
  rolelist:any;
  registerform = this.builder.group({
    id:this.builder.control(''),
    name:this.builder.control(''),
    email:this.builder.control(''),
    role:this.builder.control('',Validators.required),
    isactive:this.builder.control(false),
    password:this.builder.control('')
  })
  
  editdata:any;
  ngOnInit(): void {
      this.partner.GetRole().subscribe(res=>{
        this.rolelist=res;
      })
      if(this.data.usercode!=null && this.data.usercode!=''){
        this.partner.Getcode(this.data.usercode).subscribe(res=>{
          this.editdata=res;
          this.registerform.setValue({id:this.editdata.id,
            name:this.editdata.name,
            email:this.editdata.email,password:this.editdata.password,
            role:this.editdata.role,isactive:this.editdata.isactive })
        })
      }
  }
  updateuser(){
    if(this.registerform.valid){
      this.partner.Updatepartner(this.registerform.value.id,this.registerform.value).subscribe((res:any)=>{
        this.toastr.success("Updated Sucessfully.");
        this.dialog.close();
      })
    }else{
      this.toastr.warning("Please Select Role.")
    }
  }
}
