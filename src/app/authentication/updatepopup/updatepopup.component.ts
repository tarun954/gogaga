import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import{MAT_DIALOG_DATA,MatDialogRef }from'@angular/material/dialog'
@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {
  constructor(private builder: FormBuilder,private service:AuthService,
    @Inject(MAT_DIALOG_DATA) public data:any,private toastr:ToastrService,
    private dialog:MatDialogRef<UpdatepopupComponent>){}
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
      this.service.GetAllRole().subscribe(res=>{
        this.rolelist=res;
      })
      if(this.data.usercode!=null && this.data.usercode!=''){
        this.service.Getbycode(this.data.usercode).subscribe(res=>{
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
      this.service.Updateuser(this.registerform.value.id,this.registerform.value).subscribe(res=>{
        this.toastr.success("Updated Sucessfully.");
        this.dialog.close();
      })
    }else{
      this.toastr.warning("Please Select Role.")
    }
  }
}
