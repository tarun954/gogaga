import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent {
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
  sales =[
    {name:'Team 1',value:'team 1'},
    {name:'Team 2',value:'team 2'}, 
    {name:'Team 3',value:'team 3'},
    {name:'Team 4',value:'team 4'},
    {name:'Team 5',value:'team 5'}
  ]
  itinearyt =[
    {name:'Team 1',value:'team 1'},
    {name:'Team 2',value:'team 2'}, 
    {name:'Team 3',value:'team 3'},
    {name:'Team 4',value:'team 4'},
    {name:'Team 5',value:'team 5'}
  ]
  transport =[
    {name:'Flight',value:'flight'},
    {name:'Train',value:'train'}, 
    {name:'Bus',value:'bus'},
     
  ]
  flighttype =[
    {name:'One Way',value:'one way'},
    {name:'Two Way',value:'two way'} 
     
  ]
  traintype =[
    {name:'One Way',value:'one way'},
    {name:'Two Way',value:'two way'} 
     
  ]
  bustype =[
    {name:'One Way',value:'one way'},
    {name:'Two Way',value:'two way'} 
     
  ]
  constructor(private api:ApiService, private activeroute:ActivatedRoute, private router:Router,private toastr:ToastrService){
    
  }
  datasid:any;
   datas:any
   dataid:any;
   data:any
   ngOnInit(): void {
    this.activeroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('id')
    });
    this.activeroute.paramMap.subscribe((param:Params)=>{
      this.datasid = param['get']('id')
    });
    this.api.getbyid(this.datasid).subscribe((datas:any)=>{
      this.datas = datas
      console.log(this.datas)
    });
    this.api.getBookingbyid(this.dataid).subscribe((data:any)=>{
      this.data = data
      console.log(this.data)
    }) 
      
   }
   update(){
      this.api.updateBooking(this.data,this.dataid).subscribe((data:any)=>{
        this.router.navigate(['admin/bookings/confirmed'])
         
        this.toastr.success('Updated');
      })
      
   } 
}
