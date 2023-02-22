import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountsform',
  templateUrl: './accountsform.component.html',
  styleUrls: ['./accountsform.component.css']
})
export class AccountsformComponent {
  constructor(private api: ApiService,private formBuilder:FormBuilder, private toastr:ToastrService,private router:Router){
    this.financialForm = this.formBuilder.group({
      transactiondate:'',
      transactionparticular:'',
      transactiontype:'',
      ghrn:'',
      amount:'',
      bankname:'',
      transactionnumber:'',
      type:''
    })
  }
  transactiontype = [
    {name:'Expenses',value:'expenses'},
    {name:'Salary',value:'salary'},
    {name:'Packages',value:'packages'},
    {name:'Reiumbersement',value:'reiumbersement'},
    {name:'Hand Loan',value:'Hand Loan'},
    {name:'EMI',value:'emi'},
    {name:'Loan',value:'loan'},
    {name:'TDS',value:'tds'},
    {name:'GST',value:'gst'},
    {name:'IT',value:'it'}
  ]
  type=[
    {name:'Credit',value:'credit'},
    {name:'Debit',value:'debit'}
  ]
  transaction:any;
  financialForm!:FormGroup
  ngOnInit(): void {
     
  }
  OnSubmit(){
    if(this.financialForm.valid){
      console.log(this.financialForm.value);
      this.api.addfinancial(this.financialForm.value).subscribe({
        next:(val:any)=>{
          this.toastr.success('Request Created');
          this.router.navigate(['/admin/accounts/financial'])
          this.financialForm.reset();
        },
        error:(err:any)=>{
          console.error(err)
        }
      })
    }
  }

}
