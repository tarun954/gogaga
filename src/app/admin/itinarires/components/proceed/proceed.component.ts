import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css']
})
export class ProceedComponent {
  packagetype = [
    {name:'Budget',value:'budget'},
    {name:'Standard',value:'standard'},
    {name:'Premium',value:'premium'}
  ]
  customertype =[
    {name:'New Customer',value:'new customer'},
    {name:'Previleged Customer',value:'previleged customer'}, 
    {name:'Returning Customer',value:'returning customer'}
  ]
  partnerdetails =[
    {name:'Hcustomer',value:'hcustomer'},
    {name:'RCustomer',value:'rcustomer'}, 
    {name:'Returning Customer',value:'returning customer'}
  ]
   
  cities =[
    {name:'New Customer',value:'new customer'},
    {name:'Previleged Customer',value:'previleged customer'}, 
    {name:'Returning Customer',value:'returning customer'}
  ]
 hstandard =[
    {name:'UnderRated',value:'UnderRated'},
    {name:'1 Star',value:'1 star'}, 
    {name:'2 Star',value:'2 star'},
    {name:'3 Star',value:'3 star'}, 
    {name:'4 Star',value:'4 star'},
    {name:'5 Star',value:'5 star'} 
  ]
  htype =[
    {name:'Hotel',value:'hotel'},
    {name:'Resort',value:'Resort'}, 
    {name:'Home Stay',value:'home stay'},
    {name:'Business Hotel',value:'business hotel'},
    {name:'Beach Side Hotel',value:'beach side hotel'}, 
    {name:'Cruise',value:'cruise'},
    {name:'Cottage',value:'cottage'},
    {name:'House Boat',value:'house boat'}, 
    {name:'Tree House',value:'tree house'},
    {name:'Villa',value:'villa'}, 
    {name:'Service Apartment',value:'service apartment'},
    {name:'Hostel',value:'hostel'},
    {name:'Airport Hotel',value:'airport hotel'}, 
    {name:'Own',value:'own'}
  ]
  roomtype =[
    {name:'Single Room',value:'single room'},
    {name:'Twin Room',value:'twin room'}, 
    {name:'Double Room',value:'double room'},
    {name:'Triple Room',value:'triple room'},
    {name:'Quad Sharing Room',value:'quad sharing room'}
  ]
  travelflex =[
    {name:'2-3 Days from Proposed Dates',value:'2-3 days from proposed dates'},
    {name:'A Week from Proposed Dates',value:'a week from proposed dates'},  
    {name:'Half a Month from Proposed Dates',value:'half a month from proposed Dates'}, 
    {name:'A Month from Proposed Dates',value:'a month from proposed dates'}, 
    {name:'Any Date in next 6 Months from Proposed Dates',value:'any date in next 6 months from proposed dates'}, 
  ]
  meal =[
    {name:'Single Room',value:'single room'},
    {name:'Twin Room',value:'twin room'}, 
    {name:'Double Room',value:'double room'},
    {name:'Triple Room',value:'triple room'},
    {name:'Quad Room',value:'quad room'}
  ]
  hpreference =[
    {name:'Ground Floor Room',value:'ground floor room'},
    {name:'Suite Room',value:'suite room'}, 
    {name:'Sea View Room',value:'sea view room'},
    {name:'City View Room',value:'city view room'},
    {name:'Beach Side',value:'beach side'},
    {name:'Water Villa',value:'water villa'},
    {name:'Waterpool Villa',value:'waterpool villa'}
  ]
  triptype = [
    {name:'International',value:'international'},
    {name:'Domestic',value:'domestic'}
  ]
  foodpreferences =[
    {name:'New Customer',value:'new customer'},
    {name:'Previleged Customer',value:'previleged customer'}, 
    {name:'Returning Customer',value:'returning customer'}
  ]
  versionform!: FormGroup;
  dataid:any;
   data:any
  constructor(private formBuilder : FormBuilder , private activeroute:ActivatedRoute,private api:ApiService, private http:HttpClient,private router:Router,private toastr:ToastrService){
    this.versionform = this.formBuilder.group({
      name: ['',Validators.required],
      pdf: ['',Validators.required],
      excel: ['',Validators.required],
      createdAt: new Date()
    })
  }
   
 ngOnInit(): void {
  this.activeroute.paramMap.subscribe((param:Params)=>{
    this.dataid = param['get']('id')
  });
  this.api.getbyid(this.dataid).subscribe((data:any)=>{
    this.data = data
    console.log(this.data)
  }) 
    
 }
 

 publish(){
  if(this.versionform.valid){
   console.log(this.versionform.value)
   this.api.postversion(this.versionform.value).subscribe({
     next:(val:any)=>{
       this.toastr.success("Version Submitted")
       this.toastr.success("Request Submitted")
       this.router.navigate(['/admin/itinerary/submitted'])
       console.log(this.data)
       this.api.submit(this.data).subscribe((data:any)=>{
         this.toastr.success('Submitted Sucessfully'); 
       }),console.error();
     }
     
   })
    
  }
   
}
@Input()  count: number =0;
@Output() value = new EventEmitter<number>();
 
 submit(){
  this.count = this.count+1
  console.log(this.count)
 }
}
