import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, UntypedFormArray, UntypedFormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TimeScale } from 'chart.js';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
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
  x:any;
  public bookingform!: FormGroup;
  val!: number;
  partnerpervalue: any;
  supvalue: any;
  sapvalue: any;
  lgvalue: any;
  gstpervalue: any;
  fpervalue: any;
  totaltcostvalue: any;
  cruisecostvalue: any;
  agentspervalue: any;
  lppvalue: any;
  fppvalue: any;
  emicostvalue: any;
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
      alocation:'',
      ahotel:'',
      acontact:'',
      anumber:'',
      acategory:'',
      avendor:'',
      aroom:'',
      acheckin:'',
      acheckout:'',
      amealplan:'',
      aoccupancy:'',
      aconfirm:'',
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
      console.log("yvalue",y);
      // console.log("xvalue",x);
      this.bookingform.controls['companycost'].setValue(y);
      let a;
      a=(Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100)
      console.log("avalue",y); 
      this.bookingform.controls['ccost'].setValue(a);

    });

    // this is partner percentage
    this.bookingform.get('sup')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.supvalue = selectedValue;
    });
    this.bookingform.get('sap')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.sapvalue = selectedValue;
    });
    this.bookingform.get('lg')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.lgvalue = selectedValue;
      let result;
      result = Number(this.supvalue)+Number(this.sapvalue)+Number(this.lgvalue)
      this.bookingform.controls['final'].setValue(result); 
    });
    this.bookingform.get('partnerper')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("totalcab,",selectedValue)
      this.partnerpervalue = selectedValue;
      let b;
      b=(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100
      this.bookingform.controls['partnercost'].setValue(b);
      let cs;
      cs = ((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100)
      this.bookingform.controls['scost'].setValue(cs)
    });
    this.bookingform.get('gstper')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.gstpervalue = selectedValue;
      let gst;
      gst =  ((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100))*Number(this.gstpervalue))/100
      this.bookingform.controls['gstcost'].setValue(gst); 
      let lcgc;
      lcgc = (((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100))+(((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100))*Number(this.gstpervalue))/100)
      this.bookingform.controls['agstcost'].setValue(lcgc);
      this.bookingform.controls['totallcost'].setValue(lcgc);
    });

    // total Flight Cost
    this.bookingform.get('tcost1')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("tcost1,",selectedValue)
      this.tcost1value = selectedValue;
    });
     
    this.bookingform.get('btotal')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("bcost,",selectedValue)
      this.btotalvalue = selectedValue;
      let z ;
      z= Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue)
      // console.log("xvalue",x);
      console.log("xvalue",z);
      this.bookingform.controls['afc'].setValue(z);
    });
    this.bookingform.get('ttotal')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("ttocost1,",selectedValue)
      this.ttotalvalue = selectedValue;
       
    });
    // this.bookingform.get('btotal1')?.valueChanges.subscribe((selectedValue:any)=>{
    //   console.log("bcost1,",selectedValue)
    //   this.btotal1value = selectedValue;
    // });
    // this.bookingform.get('tcost2')?.valueChanges.subscribe((selectedValue:any)=>{
    //   console.log("tcost2,",selectedValue)
    //   this.tcost2value = selectedValue;
    // }); 
    // this.bookingform.get('ttotal1')?.valueChanges.subscribe((selectedValue:any)=>{
    //   console.log("ttotal1,",selectedValue)
    //   this.ttotal1value = selectedValue;
       
       
    // }); 
    this.bookingform.get('fper')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("suppitotal,",selectedValue)
      this.fpervalue = selectedValue;
      let fc ;
      fc= (( Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue))*Number(this.fpervalue))/100
       
      this.bookingform.controls['flcost'].setValue(fc);
      let tfl;
      
      tfl = ( Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue))+((( Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue))*Number(this.fpervalue))/100)
      this.bookingform.controls['totalfcost'].setValue(tfl);
    });
    this.bookingform.get('totaltcost')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost1,",selectedValue)
      this.totaltcostvalue = selectedValue;
    });
    this.bookingform.get('cruisecost')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.cruisecostvalue = selectedValue;
    });
    this.bookingform.get('agentsper')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.agentspervalue = selectedValue;
      let acc;
      acc = (Number(this.cruisecostvalue)*Number(this.agentspervalue))/100
      this.bookingform.controls['agentscost'].setValue(acc);
      let tpc;
      tpc = (( Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue))+((( Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue))*Number(this.fpervalue))/100))+(Number(this.cruisecostvalue))+((Number(this.cruisecostvalue)*Number(this.agentspervalue))/100)+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100))+(((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100))*Number(this.gstpervalue))/100))
      this.bookingform.controls['totalp'].setValue(tpc);
    });
    this.bookingform.get('lpp')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.lppvalue = selectedValue;
      let lcp;
      lcp = ((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100))+(((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100))*Number(this.gstpervalue))/100))/(Number(this.lppvalue))
      this.bookingform.controls['lcpp'].setValue(lcp);
    });
    this.bookingform.get('fpp')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.fppvalue = selectedValue;
      let fcp;
      fcp =  (( Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue))+((( Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue))*Number(this.fpervalue))/100))/(Number(this.fppvalue))
      this.bookingform.controls['fcpp'].setValue(fcp);
    });
    this.bookingform.get('emicost')?.valueChanges.subscribe((selectedValue:any)=>{
      // console.log("tcost,",selectedValue)
      this.emicostvalue = selectedValue;
      let pce;
      pce = (((( Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue))+((( Number(this.tcost1value)+Number(this.btotalvalue)+Number(this.ttotalvalue))*Number(this.fpervalue))/100))+(Number(this.cruisecostvalue))+((Number(this.cruisecostvalue)*Number(this.agentspervalue))/100)+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100))+(((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))+((((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))+(((Number(this.atotalvalue)+Number(this.totalcabvalue)+Number(this.suppitotalvalue))*Number(this.companypervalue))/100))*(Number(this.partnerpervalue)))/100))*Number(this.gstpervalue))/100)))*(Number(this.emicostvalue)))/100
      this.bookingform.controls['packagecoste'].setValue(pce);
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
   
    this.activeroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('id')
    });
    this.api.getbyid(this.dataid).subscribe((data:any)=>{
      this.data = data
      console.log(this.data)
    }) 
      
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
  public addMoreHotel(): void {
    this.hotels.push(this.getHotelControl());
  }
  private getHotelControl(): FormGroup {
    return this.formBuilder.group({
      alocation1:'',
      ahotel1:'',
      acontact1:'',
      anumber1:'',
      acategory1:'',
      avendor1:'',
      aroom1:'',
      acheckin1:'',
      acheckout1:'',
      amealplan1:'',
      aoccupancy1:'',
      aconfirm1:'',
      asuppliment1:'',
      ano1:'',
      anight1:'',
      arcost1:'',
      asupp1:'',
      atotal1:'',
    });
  }

  public removeHotel(j: number): void {
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

   addbooking(){
    if(this.bookingform.valid){  
      this.api.postBooking(this.bookingform.value).subscribe({
        next:(val:any)=>{
          this.toastr.success('Booking Request Created');
        this.router.navigate(['/admin/bookings/confirmed']) 
        this.bookingform.reset();
        }
      })
    }
   }
}
