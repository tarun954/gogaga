import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'; 
import { ToastrService } from 'ngx-toastr';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent {
[x: string]: any;
alertOpt: SweetAlertOptions = {};
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
  constructor(private api:ApiService, private activeroute:ActivatedRoute,private toastr:ToastrService, private router:Router){

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
      
   }
   
   
 
   
  deleteitinerary(id:number){
    this.api.deleteItinerary(id).subscribe({
      next:(res)=>{
         this.toastr.warning("Employee Deleted")
         this.router.navigate(['/admin/itinerary/pending'])
          
      },error: console.log
    })
     
     
  }
  id!:number
  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.api.deleteItinerary(this.id);
      }
    });
  }
  delete(){
    this.api.restoreitineary(this.data).subscribe((data:any)=>{
       this.toastr.success("Employee Added to Delete")
    })
  }
   
  // loaddeleted(){
  //   this.api.gerestoreid().subscribe({
  //     next:(res)=>{
  //       console.log(res)
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.sort= this.sort;
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     error(err){
  //       console.log(err);
  //     }
  //   })
  // }
}
