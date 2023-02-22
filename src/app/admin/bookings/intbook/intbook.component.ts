import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-intbook',
  templateUrl: './intbook.component.html',
  styleUrls: ['./intbook.component.css']
})
export class IntbookComponent {
  atotalvalue:any;
  totalcabvalue:any;
  suppitotalvalue: any;
  companypervalue: any;
  tcost1value: any;
  tcost2value: any;
  btotalvalue: any;
  ttotalvalue: any;
  btotal1value: any;
  ttotal1value: any;
// parseInt(arg0: string) {
// throw new Error('Method not implemented.');
// }
showText: boolean = false;
public show:boolean = false;
public shows:boolean = false;
  public buttonName:any = 'Consolidated';
  public buttonNam:any = 'Bifurgeted';

  

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Consolidated";
  }
  toggl() {
    this.shows = !this.shows;

    // Change the name of the button.
    if(this.shows)  
      this.buttonNam = "Hide";
    else
      this.buttonNam = "Bifurgeted";
  }
  sales =[
    {name:'Team 1',value:'team 1'},
    {name:'Team 2',value:'team 2'}, 
    {name:'Team 3',value:'team 3'},
    {name:'Team 4',value:'team 4'},
    {name:'Team 5',value:'team 5'}
  ]
  currency =[
    {name:'Dollar',value:'dollar'},
    {name:'Rupees',value:'rupees'}, 
    {name:'Pounds',value:'pounds'},
    {name:'CAN Dollar',value:'can dollar'},
    {name:'Dinars',value:'dinars'}
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
  tours =[
    {name:'SIC',value:'sic'},
    {name:'Private',value:'private'} 
     
  ]
  transfers =[
    {name:'SIC',value:'sic'},
    {name:'Private',value:'private'} 
     
  ]
  mealtype =[
    {name:'Meal With Transfers',value:'meal with transfers'},
    {name:'Meal Without Transfers',value:'meal without transfers'} 
     
  ]
  x:any;
  public bookingform!: FormGroup;
  val!: number;
  isToggled:boolean = false
   
  constructor(private api:ApiService,private http:HttpClient,private formBuilder:FormBuilder, private activeroute:ActivatedRoute, private router:Router,private toastr:ToastrService){
    this.bookingform = this.formBuilder.group({
      confirmdate:'',
      sales:'',
      itinearyt:'',
      executive:'',
      packagecost:'', 
      advance:'',
      balance:'', 
      sup:'',
      sap:'',
      lg:'',
      final:'',
      transport:'',
      fsource:'',
      fpriceas:'',
      flighttype:'',
      summary1:'',
      flightdetails1:'',
      return:'',
      connecting1:'',
      baggage1:'',
      fduration1:'',
      flightcost1:'',
      addbaggage1:'',
      tcost1:'', 
      tsource:'',
      tpriceas:'',
      traintype:'',
      trainname:'',
      tfrom:'',
      tto:'',
      tduration:'',
      class:'',
      availability:'',
      no:'',
      perperson:'', 
      ttotal:'',
      bsource:'',
      bpriceas:'',
      bustype:'',
      bname:'',
      bfrom:'',
      bto:'',
      startdate:'',
      reachdate:'',
      bduration:'',
      bclass:'',
      bno:'',
      bper:'',
      btotal:'',
      addaccomodation:'',
      acountry:'',
      ahotel:'',
      acity:'', 
      acategory:'', 
      aroom:'',
      acheckin:'',
      acheckout:'',
      amealplan:'',
      aoccupancy:'', 
      asuppliment:'',
      ano:'',
      anight:'',
      arcost:'',
      asupp:'',
      atotal:'',
      addtrans:'',
      tlocation:'',
      travelsource:'',
      travelsname:'',
      tcontact:'',
      tvehicle:'',
      tvehitype:'',
      tseating:'',
      tprovision:'',
      travelstart:'',
      travelend:'',
      tverification:'',
      nounit:'',
      noper:'',
      totalcab:'',
      addsuppli:'',
      suppitype:'',
      suppidetails:'',
      suppilocation:'',
      suppivendor:'',
      suppicontact:'',
      suppistart:'',
      suppiend:'',
      suppino:'',
      suppiper:'',
      suppitotal:'', 
      netcost:['',],
      companyper:'',
      companycost:'', 
      ccost:'',
      partnerper:'',
      partnercost:'', 
      scost:'',
      gstper:'',
      gstcost:'',
      agstcost:'', 
      afc:'',
      fper:'',
      flcost:'', 
      totaltcost:'', 
      totallcost:'',
      totalfcost:'',
      totalp:'', 
      cruisecost:'',
      agentsper:'',
      agentscost:'',
      emicost:'',
      packagecoste:'', 
      lcpp:'',
      lpp:'',
      fpp:'',
      fcpp:'',
      day1:'',
      dlocation:'',
      dkms:'',
      dmeal:'',
      dtour:'',
      r1:'', 
      flights: this.formBuilder.array([]),
      trains: this.formBuilder.array([]),
      bus:this.formBuilder.array([]),
      hotels:this.formBuilder.array([]),
      cabs:this.formBuilder.array([]),
      supplis:this.formBuilder.array([])


    });
    // this.bookingform.get('netcost')?.valueChanges.subscribe((selectedValue:any)=>{
    //   console.log("netcostvalue,",selectedValue)
    // });
    this.bookingform.get('atotal')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("atotal,",selectedValue)
      this.atotalvalue = selectedValue;
    });
    this.bookingform.get('totalcab')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("totalcab,",selectedValue)
      this.totalcabvalue = selectedValue;
    });
    this.bookingform.get('suppitotal')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("suppitotal,",selectedValue)
      this.suppitotalvalue = selectedValue;
      let x ;
      x=Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue);
      // console.log("xvalue",x);
      // console.log("xvalue",x);
      this.bookingform.controls['netcost'].setValue(x);

    });
    // company land cost and cost to company
    this.bookingform.get('companyper')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("companyper",selectedValue)
      this.companypervalue = selectedValue;
      let y ;
      y=((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100
      console.log("xvalue",y);
      // console.log("xvalue",x);
      this.bookingform.controls['companycost'].setValue(y);
    });
     


    // total Flight Cost
    this.bookingform.get('tcost1')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost1,",selectedValue)
      this.tcost1value = selectedValue;
    });
    this.bookingform.get('tcost2')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.tcost2value = selectedValue;
    }); 
    this.bookingform.get('btotal')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.btotalvalue = selectedValue;
    });
    this.bookingform.get('ttoal')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost1,",selectedValue)
      this.ttotalvalue = selectedValue;
    });
    this.bookingform.get('btotal1')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.btotal1value = selectedValue;
    });

    this.bookingform.get('ttotal1')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("suppitotal,",selectedValue)
      this.ttotal1value = selectedValue;
      let z ;
      z=Number(this.tcost1value)+Number(this.tcost2value)+Number(this.btotalvalue)+Number(this.ttotalvalue)+Number(this.ttotal1value)+Number(this.btotal1value);
      // console.log("xvalue",x);
      // console.log("xvalue",x);
      this.bookingform.controls['afc'].setValue(z);

    });
    // convertToInt(atotal)+convertToInt(totalcab)+convertToInt(suppitotal)
    let role=sessionStorage.getItem('role');
    this.username = role

  }
  events:any;
  // setValue(){
  //   this.bookingform.setValue({
  //     atotal: this.x.atotal, 
  //     totalcab: this.x.totalcab,
  //     suppitotal:this.x.suppitotal
  //  });
  // }
  agstcost:string = ''; 
  companycost:string = '';
  lcpp:string = '';
  fcpp:string='';
  gstcost:string = '';
  
  scost:string = '';
  flcost:string = '';
  final:string = '';
  totalfcost:string ='';
  totallcost:string = '';
  packagecoste:string = '';
  partnerper:string = '';
  partnercost:string ='';
  ccost:string = '';
  agentscost:string = '';   
  companyper:string = '';
   
   
   
  sup:string = '';
  sap:string = '';
  lg:string = '';
  gstper:string='';
  fper:string ='';
  totaltcost:string = '';
  cruisecost:string = '';
  agentsper:string = '';
  lpp:string = '';
  fpp:string = '';
  emicost:string = '';
 
  
   
  result!: number; 
  addbaggage1:any;
  flightcost1:any 
  addbaggage2:any;
  flightcost2:any 
  bno:any;
  bper:any;
  total!:number;
  afc!:number;
  tcost1: any;
  tcost2:any;
  ttotal:any;
  ttotal1:any;
  btotal1:any;
  btotal:any;
  net:any;
  suppitotal1:any;
  suppitotal:any;
  totalcab1:any;
  totalcab:any;
  atotal1:any 
  atotal:any;
  per:any;
  compper:any;

  convertToInt(val: any){
    return parseInt(val);
  }
  calculate() {
    
    this.result = parseInt(this.sup) + parseInt(this.sap)+parseInt(this.lg);
     
  } 
  // totalfp(){
  //   this.afc = parseInt(this.tcost1)+parseInt(this.tcost2)+parseInt(this.ttotal)+parseInt(this.btotal1)+parseInt(this.ttotal1)+parseInt(this.btotal)
  // }
  // totallp(){
  //   this.net = parseInt(this.atotal)+parseInt(this.atotal1)+parseInt(this.totalcab)+parseInt(this.totalcab1)+parseInt(this.suppitotal)+parseInt(this.suppitotal1)
  // }
  // companypercent(){
  //   this.per = ((parseInt(this.atotal)+parseInt(this.atotal1)+parseInt(this.totalcab)+parseInt(this.totalcab1)+parseInt(this.suppitotal)+parseInt(this.suppitotal1))*this.compper)/100
  // }
   
  dataid:any;
   data:any
   activeTb: any = 'web';
   @Input() username:any;
   setActiveTab(activeTab: any){
     this.activeTb = activeTab;
   }
   ngOnInit(): void {
   
    // this.activeroute.paramMap.subscribe((param:Params)=>{
    //   this.dataid = param['get']('id')
    // });
    // this.api.getbyid(this.dataid).subscribe((data:any)=>{
    //   this.data = data
    //   console.log(this.data)
    // }) 
      
   }
   public get flights() {
    return <FormArray>this.bookingform.get('flights');
  }
    
  public addMoreAuthor(): void {
    this.flights.push(this.getAuthorControl());
  }
  private getAuthorControl(): FormGroup {
    return this.formBuilder.group({
      summary2:'',
      flightdetails2:'', 
      connecting2:'',
      baggage2:'',
      fduration2:'',
      flightcost2:'',
      addbaggage2:'',
      tcost2:'',
    });
  }

  public removeAuthor(i: number): void {
    this.flights.removeAt(i);
  }
  public get trains() {
    return <FormArray>this.bookingform.get('trains');
  }
  public addMoreTrain(): void {
    this.trains.push(this.getTrainControl());
  }
  private getTrainControl(): FormGroup {
    return this.formBuilder.group({
      trainname1:'',
      tfrom1:'',
      tto1:'',
      tduration1:'',
      class1:'',
      availability1:'',
      no1:'',
      perperson1:'', 
      ttotal1:'',
    });
  }

  public removeTrain(j: number): void {
    this.trains.removeAt(j);
  }
  public get bus() {
    return <FormArray>this.bookingform.get('bus');
  }
  public addMoreBus(): void {
    this.bus.push(this.getBusControl());
  }
  private getBusControl(): FormGroup {
    return this.formBuilder.group({
      bname1:'',
      bfrom1:'',
      bto1:'',
      startdate1:'',
      reachdate1:'',
      bduration1:'',
      bclass1:'',
      bno1:'',
      bper1:'',
      btotal1:''
    });
  }

  public removeBus(j: number): void {
    this.bus.removeAt(j);
  }
  public get hotels() {
    return <FormArray>this.bookingform.get('hotels');
  }
  public addMoreHote(): void {
    this.hotels.push(this.getHotelControl());
  }
  private getHotelControl(): FormGroup {
    return this.formBuilder.group({
      alocation1:'',
      ahotel1:'',
      acity1:'', 
      acategory1:'', 
      aroom1:'',
      acheckin1:'',
      acheckout1:'',
      amealplan1:'',
      aoccupancy1:'', 
      asuppliment1:'',
      ano1:'',
      anight1:'',  
    });
  }

  public removeHote(j: number): void {
    this.hotels.removeAt(j);
  }
  public get cabs() {
    return <FormArray>this.bookingform.get('cabs');
  }
  public addMoreCab(): void {
    this.cabs.push(this.getCabControl());
  }
  private getCabControl(): FormGroup {
    return this.formBuilder.group({
      tlocation1:'',
      travelsource1:'',
      travelsname1:'',
      tcontact1:'',
      tvehicle1:'',
      tvehitype1:'',
      tseating1:'',
      tprovision1:'',
      travelstart1:'',
      travelend1:'',
      tverification1:'',
      nounit1:'',
      noper1:'',
      totalcab1:'',
    });
  }

  public removeCab(j: number): void {
    this.cabs.removeAt(j);
  }
  public get supplis() {
    return <FormArray>this.bookingform.get('supplis');
  }
  public addMoreSuppliment(): void {
    this.supplis.push(this.getSupplimentControl());
  }
  private getSupplimentControl(): FormGroup {
    return this.formBuilder.group({
      suppitype1:'',
      suppidetails1:'',
      suppilocation1:'',
      suppivendor1:'',
      suppicontact1:'',
      suppistart1:'',
      suppiend1:'',
      suppino1:'',
      suppiper1:'',
      suppitotal1:'',
    });
  }

  public removeSuppliment(j: number): void {
    this.supplis.removeAt(j);
  }

  //  addbooking(){
  //   if(this.bookingform.valid){  
  //     this.api.postBooking(this.bookingform.value).subscribe({
  //       next:(val:any)=>{
  //         this.toastr.success('Booking Request Created');
  //       this.router.navigate(['/admin/bookings/confirmed']) 
  //       this.bookingform.reset();
  //       }
  //     })
  //   }
  //  }
}
