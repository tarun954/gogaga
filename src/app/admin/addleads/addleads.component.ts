import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addleads',
  templateUrl: './addleads.component.html',
  styleUrls: ['./addleads.component.css']
})
export class AddleadsComponent {
  partnername = [
    {name:'Executive One',value:'executive one'},
    {name:'Executive Two',value:'executive two'},
    {name:'Executive Three',value:'executive three'}
  ]
  customer=[
    {name:'New Customer',value:'new customer'},
    {name:'Existing Customer',value:'existing customer'}
  ]
  leadForm!: FormGroup;
   constructor(private formBuilder : FormBuilder,private api : ApiService,private toastr:ToastrService,private router:Router){}
   ngOnInit() : void {
    this.leadForm = this.formBuilder.group({
      partnername: ['',Validators.required],
      partnerlocation: ['',Validators.required],
      raisedby:  ['',Validators.required],
      raisedphone:  ['',Validators.required],
      customername:  ['',Validators.required],
      customerphone:  ['',Validators.required],
      customerlocation:  ['',Validators.required],
      destination:  ['',Validators.required],
      number:  ['',Validators.required],
      startdate:  ['',Validators.required],
      itinerary: ['',Validators.required],
      createdAt: new Date()
    })
   }
   addLead(){
    if(this.leadForm.valid){
      console.log(this.leadForm.value)
      this.api.postLead(this.leadForm.value).subscribe({
        next:(res)=> {
           this.toastr.success("Lead Created");
           this.router.navigate(['/admin/leads'])
          this.leadForm.reset();
        },
        error:()=>{
          alert("Error While Requesting the Lead")
        }
      })
    }
   }
}
