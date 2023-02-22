 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router'; 

import { data, param } from 'jquery';
import { ApiService } from '../../../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  [x: string]: any;

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
  constructor(private api:ApiService, private activeroute:ActivatedRoute, private router:Router,private toastr:ToastrService){

  }
  dataid:any;
   data:any
   ngOnInit(): void {
    this.activeroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('id')
    });
    this.api.getbyid(this.dataid).subscribe((data:any)=>{
      this.data = data
      console.log(this.data)
    }) 
    this.api.getBookingbyid(this.dataid).subscribe((data:any)=>{
      this.data = data
      console.log(this.data)
    })
      
   }
   update(){
      this.api.updateBooking(this.data,this.dataid).subscribe((data:any)=>{
        this.router.navigate(['admin/itinerary/pending'])
         
        this.toastr.success('Updated');
      })
      
   } 
   
   
}
