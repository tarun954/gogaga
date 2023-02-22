import { Component, EventEmitter, Inject, Output, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes'; 
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';  
import { HttpClient } from '@angular/common/http';
import { Itineary } from 'src/app/models/itineary';
import { DataService } from '../../../../services/data.service';

export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-additinary',
  templateUrl: './additinary.component.html',
  styleUrls: ['./additinary.component.css']
})
export class AdditinaryComponent implements OnInit {
  
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
    {name:'No Meal',value:'no meal'},
    {name:'Breakfast',value:'breakfast'}, 
    {name:'Breakfast and Lunch',value:'breakfast and lunch'},
    {name:'Breakfast and Dinner',value:'breakfast and dinner'},
    {name:'Breakfast Lunch and Dinner ',value:'breakfast lunch and dinner'}
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
    // vegtarian nonveg jainfood 
    {name:'Vegtarian',value:'new customer'},
    {name:'Non-Vegtarian',value:'previleged customer'}, 
    {name:'Jain Food',value:'returning customer'}
  ]
  budget =[
    // vegtarian nonveg jainfood 
    {name:'Budget Per Person',value:'new customer'},
    {name:'Budget For All',value:'previleged customer'}
  ]
  itineraryForm! : FormGroup;
   
  @Output() username:any;
  pdf!: string | ArrayBuffer | null; 
  myform: any;
  constructor(private formBuilder : FormBuilder,private api : ApiService, private toastr:ToastrService, 
    private router:Router,private http:HttpClient,private dataservice:DataService
    ){
    this.itineraryForm = this.formBuilder.group({
      packagetype:'', 
      formraiser:'',
      partnerdetails:'',
      refno: '',
      type:'',
      pdf:'',
      excel:'',
      customertype: '',
      customername:  '',
      customernumber:  '',
      customerlocation: '',
      destination: '',
      startfrom: '',
      sourcename: '', 
      preferfrom: '',
      preferto: '', 
      travelflex: '',
      cities: '',
      tripdate:'',
      enddate:'',
      duration: '',
      passenger: '',
      child: '',
      adults: '',
      infant: '',
      hstandard: '',
      htype: '',
      roomtype: '',
      hpreference: '',
      numofrooms: '',
      specific: '',
      meal: '',
      foodpreferences: '',
      specificreq: '',
      specifictour: '',
      comments: '' ,
      createdAt: new Date()

    });
  }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  singleSelectionSetting = {};
  groupByOption = [];
  afuConfig = {
    uploadAPI: {
      url:"http://localhost:3000/pdf"
    }
      
};
 

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
  item_id!:number;
  item_text!:string;
  
  ngOnInit(): void {
    this.singleSelectionSetting = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll: false,
      groupBy: "category"
    };
     
    // this.groupByOption = [
      
    //   { item_id: 1, item_text: "India" },
    //   { item_id: 2, item_text: "Singapore" },
    //   { item_id: 3, item_text: "Germany" },
    //   { item_id: 4, item_text: "France" },
    //   { item_id: 5, item_text: "South Korea" },
    //   { item_id: 6, item_text: "Sweden", disabled: 'disabled' }
    // ];
  }
   
  
  onFileChange(event:any) {

    if (event.target.files.length > 0) {

      const file = event.target.files[0];

      this.itineraryForm.patchValue({

        fileSource: file

      });

    }

  }
  pdfsrc:any;
  selectedpdf:any; 
  showPreview($event:any){
    const reader = new FileReader();
    reader.onload = (e)=>{
      this.pdfsrc = e.target?.result
    }  
    reader.readAsDataURL($event.target.files[0]);
    this.selectedpdf = $event.target.files[0];
  }
   @Input() 

  additinerary(){
    const itinearyForm = new FormData();
    // myform.append('file', this.myform.get(File).value);

    this.http.post('http://localhost:3000/pdf', FormData)

      .subscribe((res: any) => {

        console.log(res);

        alert('Uploaded Successfully.');

      });
    if(this.itineraryForm.valid){
      console.log(this.itineraryForm.value)
      this.api.postItinerary(this.itineraryForm.value).subscribe({
        next:(val:any)=>{  
        this.toastr.success('Itinerary Created');
        this.router.navigate(['/admin/itinerary/pending']) 
        this.itineraryForm.reset();
      },
      error:()=>{
        this.toastr.success('Error While Creating');
      }
    })
    }
    
    // const postData: Itineary = {
    //   packagetype:this.itineraryForm.value.packagetype,
    //   raisedate:this.itineraryForm.value.raisedate,
    //   itinerary:this.itineraryForm.value.itinerary,
    //   formraiser:this.itineraryForm.value.formraiser,
    //   partnerdetails:this.itineraryForm.value.partnerdetails,
    //   refno: this.itineraryForm.value.refno,
    //   type:this.itineraryForm.value.type,
    //   pdf:this.itineraryForm.value.pdf,
    //   excel:this.itineraryForm.value.excel,
    //   customertype: this.itineraryForm.value.customertype,
    //   customername:  this.itineraryForm.value.customername,
    //   customernumber:  this.itineraryForm.value.customernumber,
    //   customerlocation: this.itineraryForm.value.customerlocation,
    //   destination: this.itineraryForm.value.destination,
    //   startfrom: this.itineraryForm.value.startfrom,
    //   sourcename: this.itineraryForm.value.sourcename,
    //   sourcerole: this.itineraryForm.value.sourcerole,
    //   preferfrom: this.itineraryForm.value.preferfrom,
    //   preferto: this.itineraryForm.value.preferto, 
    //   travelflex: this.itineraryForm.value.travelflex,
    //   cities: this.itineraryForm.value.cities,
    //   tripdate:this.itineraryForm.value.tripdate,
    //   enddate:this.itineraryForm.value.enddate,
    //   duration: this.itineraryForm.value.duration,
    //   passenger: this.itineraryForm.value.passenger,
    //   child: this.itineraryForm.value.child,
    //   adults: this.itineraryForm.value.adults,
    //   infant: this.itineraryForm.value.infant,
    //   hstandard: this.itineraryForm.value.hstandard,
    //   htype: this.itineraryForm.value.htype,
    //   roomtype: this.itineraryForm.value.roomtype,
    //   hpreference: this.itineraryForm.value.hpreference,
    //   numofrooms: this.itineraryForm.value.numofrooms,
    //   specific: this.itineraryForm.value.specific,
    //   meal: this.itineraryForm.value.meal,
    //   foodpreferences: this.itineraryForm.value.foodpreferences,
    //   specificreq: this.itineraryForm.value.specificreq,
    //   specifictour: this.itineraryForm.value.specifictour,
    //   comments: this.itineraryForm.value.comments,
    //   createdAt: new Date()
    // }
     
    // this.dataservice.uploadpdf(this.selectedpdf);
  }
}
