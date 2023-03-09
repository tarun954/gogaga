import { Component, EventEmitter, Inject, Output, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes'; 
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';  
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../../../../services/data.service';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
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
  i:number =0;
  item_id!:number;
  item_text!:string;
  singleSelectionSetting = {};
   groupByOption:any;
   lg:any;
   sales:any;
  constructor(private formBuilder : FormBuilder,private api : ApiService, private toastr:ToastrService, 
    private router:Router,private http:HttpClient,private dataservice:DataService
    ){ 
      
    this.itineraryForm = this.formBuilder.group({
      id:`GHRN${this.i}`,
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
      inclusion: new FormArray([]),
      specific: '',
      meal: '',
      foodpreferences: '',
      specificreq: '',
      specifictour: '',
      comments: '' ,
      createdAt: new Date()

    });
  }
  onChange(e:any){ 
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    const checkedArray = this.itineraryForm.get('inclusion') as FormArray;
    if(checked){
      checkedArray.push(new FormControl(checkedValue));
    }else{
      let i:number = 0;
      checkedArray.controls.forEach((item)=>{
        if(item.value == checkedValue){
          checkedArray.removeAt(i);
        }
        i++;
      })
    }
  }
  inclusionsArray:string[]=['Honeymoon Inclusions','Traveol Insurance', 'Adventure Activities','Guide','Entrance Tickets','Day-1 Breakfast','Early Chicken','Plate Chicken','Birthday/Anniversary Inclusions','Vehicle Preference']
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
   
 

   
   
 afuConfig = {
    uploadAPI: {
      url:"http://localhost:3000/pdf"
    }
      
};
  
  ngOnInit(): void {
    this.singleSelectionSetting = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false,
      groupBy: "category"
    };
    this.groupByOption =  [ 
      {
        item_id: 1,
       item_text :'(2002) BHAGYALAXMI TOURS AND TRAVELS - GULBARGHA-NORTH KARNATAKA (2+14)'
       },
       {
         item_id: 2,
         item_text: '(2003) VILAS SEVENTILAL SHAH - MAYUR SUMATILAL RATHOD - VAPI - GUJARAT.(2+10)',
       },
       {
         item_id: 3,
         item_text: '(2008) GOGAGA HOLIDAYS - OWN BUSINESS',
       },
       {
         item_id: 4,
         item_text: '(2010) SAI NARENDRAKUMAR ANCHALA/HEMANTH SAIKUMAR MEDEHAL VALMIKI - RAYALASEEMA-PRAKASAM - NELLORE(2+10)',
       },
       {
         item_id: 5,
         item_text: '(2011) RAJASHRI YELLAPU -JANARDHANA REDDY JANGAMAREDDYGARI - TELANGANA',
       },
       {
         item_id: 6,
         item_text: '(2012) BHARGAV.P/ MANASWINI.L SOWJANYA.M/VAIBHAV.P (2+10)',
       },
       {
         item_id: 7,
         item_text: '(2013) SOMASHEKAR SP - MYSORE - SOUTH KARNATAKA ( 2+12 )',
       },
       {
         item_id: 8,
         item_text: '(2014) RAMANJANEYULU YERRAMSETTI( AP - Guntur , Krishna Dist , West Godavari , East Godavari, Vishakapatnam',
       },
       {
         item_id: 9,
         item_text: '(2015) RISEIN TECH PRIVATE LIMITED - INDIA.',
       },
       {
         item_id: 10,
         item_text: '(2016) CHEEKURI NAGARAJU - BANGALORE - KARNATAKA',
       },
       {
         item_id: 11,
         item_text: '(2017) RAVIKANTY REDDY JANGAMREDDYGARI/J ESWHWARAMMA - HYDERABAD',
       },
       {
         item_id: 12,
         item_text: '(2018) GOGAGA ONLINE LEADS',
       },
       {
        item_id:13,
       item_text :'(6264) LG - ALIVELU REDDY KAKULAVARAM HYDERABAD'
       },
       {
         item_id: 14,
         item_text:'(6265) LG - PAVAN KUMAR REDDY BADA KADIRI - ANANTAPUR',
       },
       {
         item_id: 15,
         item_text: '(6266) LG - MITHUN KUMAR BITTA  KADIRI - ANANTAPUR - AP ',
       },
       {
         item_id: 16,
         item_text: '(6267) LG - CHARISHMA PATNAM  KADIRI - ANANTAPUR - AP',
       },
       {
         item_id: 17,
         item_text: '(6268)  LG - ABHINAY N  KADIRI - ANANTAPUR - AP',
       },
       {
         item_id: 18,
         item_text: '(6269) LG - DINESH BUSETTY  KADIRI - ANANTAPUR - AP',
       },
       {
         item_id: 19,
         item_text: '(6270) LG - LOHITH KUMAR BACHHU KADIRI - ANANTAPUR- AP ',
       },
       {
         item_id: 20,
         item_text: '(6271)  LG- NAGARAJU ARIKACHARLA',
       },
       {
         item_id: 21,
         item_text: '(6272) LG - KALEEM BASHA SHAIK ATMAKUR-NELLORE RAYALASEEMA',
       },
       {
         item_id: 22,
         item_text: '(6273)  LG - GAJENDER REDDY GAYAPU HANMAKONDA TELANGANA',
       },
       {
         item_id: 23,
         item_text: '(6274) LG - BALAJI PABBINEEDI KADIRI - ANANTAPUR- AP',
       },
       {
         item_id: 24,
         item_text: '(6275)  LG - ANJAIAH KATAKAM KADIRI - ANANTAPUR - AP',
       },
       {
         item_id: 25,
         item_text: '(6276)  LG - ASHWAK HUSSAIN KAMMUBHAI GARI KADIRI - ANANTAPUR - AP',
       },
        
       {
         item_id: 26,
         item_text: '(6277)  LG - ADITYA BALIJA KADIRI - ANANTAPUR - AP',
       },
       {
         item_id: 27,
         item_text: '(6278)  LG - RAMAMOHAN THIRUVAIPATI KADIRI - ANANTAPUR - AP',
       },
       {
         item_id: 28,
         item_text: '(6279)  LG - NAVEEN KUMAR P KADIRI - ANANTAPUR - AP',
       },
       {
         item_id: 29,
         item_text: '(6280)  LG - VAMSI KRISHNA K - ANANTAPUR - AP',
       },
       {
         item_id: 30,
         item_text: '(6281)  LG - JUHITH SAI AVULA - ANANTAPUR - AP',
       },
       {item_id:'(6003) "AMAZING ANDAMAN CORALS TOURS AND TRAVELS, ANANTAPUR RAYALSEEMA',item_text: '(6003) "AMAZING ANDAMAN CORALS TOURS AND TRAVELS, ANANTAPUR RAYALSEEMA'},
      {item_id:'(6006) SUSHMA VIVEK, BANGALORE SOUTH KARNATAKA',item_text: '(6006) SUSHMA VIVEK, BANGALORE SOUTH KARNATAKA'},
      {item_id:'(6007) ALI MOHD HYDERABAD',item_text: '(6007) ALI MOHD HYDERABAD'},
      {item_id:'(6008) PRASHANT S JAIN NORTH KARNATAKA',item_text: '(6008) PRASHANT S JAIN NORTH KARNATAKA'}, 
      {item_id:'(6009) VIJAYANAND MARK - KARNATAKA GULBARGA (KALABURAGI)',item_text: '(6009) VIJAYANAND MARK - KARNATAKA GULBARGA (KALABURAGI)'},
      {item_id:'(6010) PRAKASH K SIMPIGER, YADAGIR NORTH KARNATAKA',item_text: '(6010) PRAKASH K SIMPIGER, YADAGIR NORTH KARNATAKA'},
      {item_id:'(6011) AZAD CHANDRASHEKAR PANI, SHORAPUR NORTH KARNATAKA',item_text: '(6011) AZAD CHANDRASHEKAR PANI, SHORAPUR NORTH KARNATAKA'},
      {item_id:'(6013) RAJASHRI YELLAPU -JANARDHANA REDDY JANGAMAREDDYGARI TELANGANA',item_text: '(6013) RAJASHRI YELLAPU -JANARDHANA REDDY JANGAMAREDDYGARI TELANGANA'},
      {item_id:'(6014) THANNIRU RAVIKUMAR,MANCHERIAL TELANGANA',item_text: '(6014) THANNIRU RAVIKUMAR,MANCHERIAL TELANGANA'},
      {item_id:'(6015) N.UDAYA BHASKAR,ANANTAPUR RAYALASEEMA',item_text: '(6015) N.UDAYA BHASKAR,ANANTAPUR RAYALASEEMA'},
      {item_id:'(6016) NAGARAPU SAMPATH KUMAR,KARIMNAGAR TELANGANA',item_text: '(6016) NAGARAPU SAMPATH KUMAR,KARIMNAGAR TELANGANA'},
      {item_id:'(6017) VISHNU VARDHAN,RAICHUR NORTH KARNATAKA',item_text: '(6017) VISHNU VARDHAN,RAICHUR NORTH KARNATAKA'},
      {item_id:'(6018) JAKKULA SRINIVAS, ARMUR-NIZAMABAD TELANGANA',item_text: '(6018) JAKKULA SRINIVAS, ARMUR-NIZAMABAD TELANGANA'},
      {item_id:'(6019) VINEETHA JITESH - MANAYILKULANGARA,KOLLAM KERALA ',item_text: '(6019) VINEETHA JITESH - MANAYILKULANGARA,KOLLAM KERALA '}, 
      {item_id:'(6020) JEEDIGUNTA VENKANNA BABU,KHAMMAM TELANGANA',item_text: '(6020) JEEDIGUNTA VENKANNA BABU,KHAMMAM TELANGANA'},
      {item_id:'(6021) DASARI RAJENDAR,IBRAHIMPATNAM TELANGANA',item_text: '(6021) DASARI RAJENDAR,IBRAHIMPATNAM TELANGANA'},
      {item_id:'(6022) ROOPAREKHA BASANGOWDA PATIL,HUBLI NORTH KARNATAKA',item_text: '(6022) ROOPAREKHA BASANGOWDA PATIL,HUBLI NORTH KARNATAKA'},
      {item_id:'(6023) ANAND KUMAR H BANGALORE,SOUTH KARNATAKA',item_text: '(6023) ANAND KUMAR H BANGALOR,SOUTH KARNATAKA'}, 
      {item_id:'(6024) KOLLI MITHRA ROY,KHAMMAM TELANGANA',item_text: '(6024) KOLLI MITHRA ROY,KHAMMAM TELANGANA'},
      {item_id:'(6025) RAVI E,MORTHAD NIZAMBAD TELANGANA',item_text: '(6025) RAVI E,MORTHAD NIZAMBAAD TELANGANA'},
      {item_id:'(6026) M S YOGESH,HINDUPUR-ANANTAPUR RAYALASEEMA',item_text: '(6026) M S YOGESH,HINDUPUR-ANANTAPUR RAYALASEEMA'},
      {item_id:'(6027) MUDDAM RAVI,MANCHERIAL TELANGANA',item_text: '(6027) MUDDAM RAVI,MANCHERIAL TELANGANA'},
      {item_id:'(6028) SHARATH CHIRRA,KHAMMAM TELANGANA',item_text: '(6028) SHARATH CHIRRA,KHAMMAM TELANGANA'},
      {item_id:'(6029) CHAKALI PRASAD,KURNOOL  RAYALASEEMA',item_text: '(6029) CHAKALI PRASAD,KURNOOL  RAYALASEEMA'},
      {item_id:'(6030)  GANGA REDDY B,NIZAMBAD TELANGANA',item_text: '(6030)  GANGA REDDY B,NIZAMBAD TELANGANA'},
      {item_id:'(6031) Shaik Abdulsattar,KURNOOL RAYALASEEMA',item_text: '(6031) Shaik Abdulsattar,KURNOOL RAYALASEEMA'},
      {item_id:'(6032) P.MD.Saddam hussain,KURNOOL RAYALASEEMA',item_text: '(6032) P.MD.Saddam hussain,KURNOOL RAYALASEEMA'},
      {item_id:'(6033) RAKESH GANTA,NIRMAL-ADILABAD TELANGANA',item_text: '(6033) RAKESH GANTA,NIRMAL-ADILABAD TELANGANA'},
      {item_id:'(6034) J D PANDURANGA VITAL,GUNTUR ANDHRA',item_text: '(6034) J D PANDURANGA VITAL,GUNTUR ANDHRA'},
      {item_id:'(6035) JANGILI RAMESH,KARIMNAGAR TELANGANA',item_text: '(6035) JANGILI RAMESH,KARIMNAGAR TELANGANA'},
      {item_id:'(6037) M TAHER BASHA,ADONI-KURNOOL RAYALASEEMA',item_text: '(6037) M TAHER BASHA,ADONI-KURNOOL RAYALASEEMA'},
      {item_id:'(6039) SHAIK SHASHA VALI,KURNOOL RAYALASEEMA',item_text: '(6039) SHAIK SHASHA VALI,KURNOOL RAYALASEEMA'},
      {item_id:'(6041) MALYALA SRINIVAS,MANCHERIAL TELANGANA',item_text: '(6041) MALYALA SRINIVAS,MANCHERIAL TELANGANA'},
      {item_id:'(6042) PARVATHI GANESH,MANCHERIAL TELANGANA',item_text: '(6042) PARVATHI GANESH,MANCHERIAL TELANGANA'},
      {item_id:'(6043) CHEVVA RAJU,MANCHERIAL TELANGANA',item_text: '(6043) CHEVVA RAJU,MANCHERIAL TELANGANA'},
      {item_id:'(6044) ANURADHA NAVANI,PUNE MAHARASTRA',item_text: '(6044) ANURADHA NAVANI,PUNE MAHARASTRA'},
      {item_id:'(6045) ADDURI VIVEK,ANNAVARAM TUNI-EAST GODAVARI ANDHRA',item_text: '(6045) ADDURI VIVEK,ANNAVARAM  TUNI-EAST GODAVARI ANDHRA'},
      {item_id:'(6046) NAMADI.SATYA PRASAD KUMARI,EAST GODAVARI ANDHRA',item_text: '(6046) NAMADI.SATYA PRASAD KUMARI,EAST GODAVARI ANDHRA'},
      {item_id:'(6047) Mr. Godarai Beeraiah,MANCHERIAL TELANGANA',item_text: '(6047) Mr. Godarai Beeraiah,MANCHERIAL TELANGANA'},
      {item_id:'(6048) RAMSHEKAR REDDY P,KHAMMAM TELANGANA',item_text: '(6048) RAMSHEKAR REDDY P,KHAMMAM TELANGANA'},
      {item_id:'(6049) MAMIDALA ARAVIND KUMAR,MANCHERIAL TELANGANA',item_text: '(6049) MAMIDALA ARAVIND KUMAR,MANCHERIAL TELANGANA'},
      {item_id:'(6050) RAJESH R,TUMKUR  SOUTH KARNATAKA',item_text: '(6050) RAJESH R,TUMKUR  SOUTH KARNATAKA'},
      {item_id:'(6051) SUNIL KUMAR Y S,TUMKUR  SOUTH KARNATAKA',item_text: '(6051) SUNIL KUMAR Y S,TUMKUR SOUTH KARNATAKA'}, 
      {item_id:'(6052) NILESH JALINDAR KADAM,WEST BADLAPUR - MUMBAI MAHARASTRA',item_text: '(6052) NILESH JALINDAR KADAM, ,WEST BADLAPUR - MUMBAI MAHARASTRA'},
      {item_id:'(6053) Mrs.Prathima,ANANTAPUR RAYALASEEMA',item_text: '(6053) Mrs.Prathima,ANANTAPUR RAYALASEEMA'},
      {item_id:'(6054) KIRAN B T,CHALLAKERE SOUTH KARNATAKA',item_text: '(6054) KIRAN B T,CHALLAKERE SOUTH KARNATAKA'},  
      {item_id:'(6055) SIDDANA GOWDA B,BALLARI TELANGANA',item_text: '(6055) SIDDANA GOWDA B,BALLARI TELANGANA'},
      {item_id:'(6057) MODUMPALLY GANESH KUMAR,KARIMNAGAR TELANGANA',item_text: '(6057) MODUMPALLY GANESH KUMAR,KARIMNAGAR TELANGANA'},
      {item_id:'(6058) BANDI SREENIVASA RAO,MADHIRA-KAMMAM ANDHRA',item_text: '(6058) BANDI SREENIVASA RAO,MADHIRA-KAMMAM ANDHRA'},
      {item_id:'(6059) SAI NARENDRA KUMAR ANCHALA / HEMANTH SAIKUMAR MEDE RAYALASEEMA',item_text: '(6059) SAI NARENDRA KUMAR ANCHALA / HEMANTH SAIKUMAR MEDE RAYALASEEMA'},
      {item_id:'(6060) SANGIREDDY SRINIVAS REDDY, PRODDATUR - KADAPA RAYALSEEMA',item_text: '(6060) SANGIREDDY SRINIVAS REDDY, PRODDATUR - KADAPA RAYALSEEMA'},
      {item_id:'(6061) MALLOLU BAPIRAJU,  KATHERU - EAST GODAVARI ANDHRA',item_text: '(6061) MALLOLU BAPIRAJU,  KATHERU - EAST GODAVARI ANDHRA'},
      {item_id:'(6062) LAKKA VIVEK, NIRMAL TELANGANA',item_text: '(6062) LAKKA VIVEK, NIRMAL TELANGANA'},  
      {item_id:'(6063) SAIKIRAN, NIRMAL TELANGANA',item_text: '(6063) SAIKIRAN, NIRMAL TELANGANA'},  
      {item_id:'(6065) PALISETTI UMA, SRIKAKULAM ANDHRA',item_text: '(6065) PALISETTI UMA, SRIKAKULAM ANDHRA'},
      {item_id:'(6067) BATTULA ANESH KUMAR ,KOTHAGRAHARAM VIZIANAGARAM ANDHRA',item_text: '(6067) BATTULA ANESH KUMAR ,KOTHAGRAHARAM VIZIANAGARAM ANDHRA'},
      {item_id:'(6068) KEERTHINMAYEE KARIMADDELA, KADAPA RAYALSEEMA,',item_text: '(6068) KEERTHINMAYEE KARIMADDELA, KADAPA RAYALSEEMA,'},
      {item_id:'(6069) JEEVAN BHIMRAO PATIL, PUNE MAHARASTRA',item_text: '(6069) JEEVAN BHIMRAO PATIL, PUNE MAHARASTRA'}, 
      {item_id:'(6070) Penumatcha Satyanarayana Raju, VIZIANAGARAM ANDHRA',item_text: '(6070) Penumatcha Satyanarayana Raju, VIZIANAGARAM ANDHRA'},
      {item_id:'(6071) V Durga Prasad Gupta - VIZIANAGARAM ANDHRA - A P, VIZIANAGARAM ANDHRA',item_text: '(6071) V Durga Prasad Gupta -VIZIANAGARAM ANDHRA - A P, VIZIANAGARAM ANDHRA'},
      {item_id:'(6073) M.Ramamohan Naidu, TADIPATRI - ANANTAPUR RAYALSEEMA',item_text: '(6073) M.Ramamohan Naidu, TADIPATRI - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6074) Sarvepalli Harini , VIZIANAGARAM ANDHRA',item_text: '(6074) Sarvepalli Harini , VIZIANAGARAM ANDHRA'},
      {item_id:'(6075) GOPI EDDIPALLI, THAGARAPUVALASA - VIZAG ANDHRA',item_text: '(6075) GOPI EDDIPALLI, THAGARAPUVALASA - VIZAG ANDHRA'},
      {item_id:'(6076) D.JAGANNADHAM, VISAKHAPATNAM ANDHRA',item_text: '(6076) D.JAGANNADHAM, VISAKHAPATNAM ANDHRA'},
      {item_id:'(6077) SEETHALA HEMA , SECUNDERABAD HYDERABAD',item_text: '(6077) SEETHALA HEMA , SECUNDERABAD HYDERABAD'},
      {item_id:'(6078) Sreenu pedapati, VISAKHAPATNAM ANDHRA',item_text: '(6078) Sreenu pedapati, VISAKHAPATNAM ANDHRA'},
      {item_id:'(6079) ANIL KUMAR (BLISS VACATIONS ) , BANGALORE',item_text: '(6079) ANIL KUMAR (BLISS VACATIONS ) , BANGALORE'},
      {item_id:'(6080) P MADAN BABU,  KAVALI - NELLORE RAYALASEEMA',item_text: '(6080) P MADAN BABU,  KAVALI- NELLORE RAYALASEEMA'},
      {item_id:'(6081) YUGANDHAR , NELLORE RAYALASEEMA',item_text: '(6081) YUGANDHAR , NELLORE RAYALASEEMA'},
      {item_id:'(6082) Mr. Revanna Siddaiah , KODAGU',item_text: '(6082) Mr. Revanna Siddaiah , KODAGU'},  
      {item_id:'(6083) AnilKumar, GULBARGA (KALABURAGI)',item_text: '(6083) AnilKumar, GULBARGA (KALABURAGI)'},
      {item_id:'(6084) BEVARA RAMBABU ,  KOTABAMALI - SRIKAKULAM ANDHRA',item_text: '(6084) BEVARA RAMBABU ,  KOTABAMALI - SRIKAKULAM ANDHRA'},
      {item_id:'(6085) Chand Pasha , YADGIR',item_text: '(6085) Chand Pasha , YADGIR'},  
      {item_id:'(6086) S.NAZEER AHMED , KADIRI - ANANTAPUR RAYALSEEMA',item_text: '(6086) S.NAZEER AHMED , KADIRI - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6087) K CHANDRA MOHAN , ANANTAPUR RAYALSEEMA',item_text: '(6087) K CHANDRA MOHAN , ANANTAPUR RAYALSEEMA'},
      {item_id:'(6088) LAXMANREDDY POGAL, BIDAR',item_text: '(6088) LAXMANREDDY POGAL, BIDAR'},  
      {item_id:'(6089) Kalyan Reddy, ANANTAPUR RAYALSEEMA',item_text: '(6089) Kalyan Reddy, ANANTAPUR RAYALSEEMA'},
      {item_id:'(6090) ANJANEYA REDDY - ORBIT HOLIDAYS TOURS & TRAVELS , YELLAREDDYGUDA',item_text: '(6090) ANJANEYA REDDY - ORBIT HOLIDAYS TOURS & TRAVELS , YELLAREDDYGUDA'},
      {item_id:'(6091) GV NAIDU, RAYADURGAM  - ANANTAPUR RAYALSEEMA',item_text: '(6091) GV NAIDU, RAYADURGAM  - ANANTAPUR RAYALSEEMA'}, 
      {item_id:'(6092) SRINIVAS G, BANGALORE',item_text: '(6092) SRINIVAS G, BANGALORE'},
      {item_id:'(6093) A JAGANNATH , GUNTAKAL',item_text: '(6093) A JAGANNATH , GUNTAKAL'},  
      {item_id:'(6094) KALPANA S KALLURKAR , GULBARGA',item_text: '(6094) KALPANA S KALLURKAR , GULBARGA'},
      {item_id:'(6095) BASANNA RAICHUR, SEDAM, - GULBARGA',item_text: '(6095) BASANNA RAICHUR, SEDAM, - GULBARGA'},
      {item_id:'(6096) S.MANU , TUMKUR ',item_text: '(6096) S.MANU , TUMKUR '},  
      {item_id:'(6097) K MARGARET , ANANTAPUR RAYALSEEMA',item_text: '(6097) K MARGARET , ANANTAPURUR RAYALSEEMA'},
      {item_id:'(6098) C.NEELIMA -  KARNATAKA, YADGIR',item_text: '(6098) C.NEELIMA -  KARNATAKA, YADGIR'},
      {item_id:'(6099) S.shirisha, ANANTAPUR RAYALSEEMA',item_text: '(6099) S.shirisha, ANANTAPUR RAYALSEEMA'}, 
      {item_id:'(6100) A SIVASANKARAREDDY , ANANTAPUR RAYALSEEMA',item_text: '(6100) A SIVASANKARAREDDY , ANANTAPUR RAYALSEEMA'},
      {item_id:'(6101) SANDEEP.KAMLAPURKAR,  BIDAR',item_text: '(6101) SANDEEP.KAMLAPURKAR ,  BIDAR'},  
      {item_id:'(6102) SANTOSHKUMAR, GULBARGA',item_text: '(6102) SANTOSHKUMAR , GULBARGA'},  
      {item_id:'(6103) K.Rajani, ANANTAPUR RAYALSEEMA',item_text: '(6103) K.Rajani , ANANTAPUR RAYALSEEMA'},
      {item_id:'(6104) ARAVIND.M.J, GULBARGA',item_text: '(6104) ARAVIND.M.J, GULBARGA'},  
      {item_id:'(6105) PRASHANT JAIN  GULBARGA',item_text: '(6105) PRASHANT JAIN , GULBARGA'},  
      {item_id:'(6106) VIJAY.B.K, GULBARGA',item_text: '(6106) VIJAY.B.K , GULBARGA'},  
      {item_id:'(6107) POTNURU BHARGAV, AMUDALAVALASA - SRIKAKULAM ANDHRA',item_text: '(6107) POTNURU BHARGAV , AMUDALAVALASA - SRIKAKULAM ANDHRA'},
      {item_id:'(6108) Rajendra Prasad, NELLORE RAYALASEEMA',item_text: '(6108) Rajendra Prasad , NELLORE RAYALASEEMA'}, 
      {item_id:'(6109) C RAJA GOPALA REDDY, HINDUPUR - ANANTAPUR RAYALSEEMA',item_text: '(6109) C RAJA GOPALA REDDY, HINDUPUR - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6110) sagar patil, GULBARGA',item_text: '(6110) sagar patil, GULBARGA'},  
      {item_id:'(6111) SREENIVASULUREDDY PALLAMPARTHI, MIYAPUR - HYDERABAD',item_text: '(6111) SREENIVASULUREDDY PALLAMPARTHI, MIYAPUR - HYDERABAD'},
      {item_id:'(6112) Sriramadasu Thrinadh, NELLORE RAYALASEEMA',item_text: '(6112) Sriramadasu Thrinadh, NELLORE RAYALASEEMA'},  
      {item_id:'(6113) A RAJASEKHAR PRASAD, HINDUPUR - ANANTAPUR RAYALSEEMA',item_text: '(6113) A RAJASEKHAR PRASAD, HINDUPUR - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6114) BARATAM VEERA VENKAT SATYANARAYANA, SOMPETA- SRIKAKULAM ANDHRA',item_text: '(6114) BARATAM VEERA VENKAT SATYANARAYANA, SOMPETA- SRIKAKULAM ANDHRA'},
      {item_id:'(6115) PRASADA RAO VARADA , PALAKONDA - SRIKAKULAM ANDHRA',item_text: '(6115) PRASADA RAO VARADA , PALAKONDA - SRIKAKULAM ANDHRA'},
      {item_id:'(6116) PINNAMARAJU VENKATA SRIKANTH ,  NELLORE RAYALASEEMA',item_text: '(6116) PINNAMARAJU VENKATA SRIKANTH ,  NELLORE RAYALASEEMA'}, 
      {item_id:'(6117) IRSHADAHMED MULLA , BELAGAVI NORTH KARNATAKA',item_text: '(6117) IRSHADAHMED MULLA , BELAGAVI NORTH KARNATAKA'}, 
      {item_id:'(6118) RIZWANAHMED BAGEWADI, BELAGAVI NORTH KARNATAKA',item_text: '(6118) RIZWANAHMED BAGEWADI,BELAGAVI NORTH KARNATAKA'},  
      {item_id:'(6119) MRS.SALMA A. DUBBAL, BELAGAVI NORTH KARNATAKA',item_text: '(6119) MRS.SALMA A. DUBBAL, BELAGAVI NORTH KARNATAKA'}, 
      {item_id:'(6120) MOHAMMADRAFEEQ GOVANAKOPP, BELAGAVI NORTH KARNATAKA',item_text: '(6120) MOHAMMADRAFEEQ GOVANAKOPP, BELAGAVI NORTH KARNATAKA'}, 
      {item_id:'(6121) ZAFARULLA MULLA, BELAGAVI NORTH KARNATAKA',item_text: '(6121) ZAFARULLA MULLA, BELAGAVI NORTH KARNATAKA'}, 
      {item_id:'(6122) GOGAGA HOLIDAYS',item_text: '(6122) GOGAGA HOLIDAYS'},
      {item_id:'(6124) Prashant Bongale, BELAGAVI NORTH KARNATAKA',item_text: '(6124) Prashant Bongale, BELAVI NORTH KARNATAKA'},
      {item_id:'(6125) Chandrashekar S Bhojgar, BELAGAVI NORTH KARNATAKA',item_text: '(6125) Chandrashekar S Bhojgar, BELAGAVI NORTH KARNATAKA'}, 
      {item_id:'(6126) NAYANA M GOWDA, TUMKUR SOUTH KARNATAKA',item_text: '(6126) NAYANA M GOWDA, TUMKUR SOUTH KARNATAKA'},
      {item_id:'(6127) VADDADI RAVIRAM , RAJAM',item_text: '(6127) VADDADI RAVIRAM , RAJAM'},  
      {item_id:'(6128) SAMBAR MOHAN, NIZAMABAD',item_text: '(6128) SAMBAR MOHAN, NIZAMABAD'},
      {item_id:'(6129) Hanamant Shirguppi, BELGAM',item_text: '(6129) Hanamant Shirguppi, BELGAM'},
      {item_id:'(6130) KARUNAKAR PAUL CHABOLI, KURNOOL',item_text: '(6130) KARUNAKAR PAUL CHABOLI, KURNOOL'}, 
      {item_id:'(6132) KHAJA HUSSAIN KARUMANCHI , YEMMIGANUR - KURNOOL',item_text: '(6132) KHAJA HUSSAIN KARUMANCHI , YEMMIGANUR - KURNOOL'},
      {item_id:'(6133) REDDY NARASA REDDY,  ADONI - KURNOOL',item_text: '(6133) REDDY NARASA REDDY,  ADONI - KURNOOL'},
      {item_id:'(6134) K.MALLIKARJUNA REDDY, BETHAMCHERLA-KURNOOL',item_text: '(6134) K.MALLIKARJUNA REDDY, BETHAMCHERLA-KURNOOL'}, 
      {item_id:'(6136) VADISILA JAGADISH, NAIDUPET - NELLORE RAYALASEEMA',item_text: '(6136) VADISILA JAGADISH, NAIIDUPET - NELLORE RAYALASEEMA'},
      {item_id:'(6137) ARAVAKAM MUNI KRISHNA, NAIDUPET - NELLORE RAYALASEEMA',item_text: '(6137) ARAVAKAM MUNI KRISHNA, NAIDUPET - NELLORE RAYALASEEMA'},
      {item_id:'(6139) KONGISI KASINATH , DHONE - KURNOOL',item_text: '(6139) KONGISI KASINATH , DHONE - KURNOOL'},
      {item_id:'(6146) SVK TRAVELS',item_text: '(6146) SVK TRAVELS'},  
      {item_id:'(6147) PF TOURS & TRAVELS',item_text: '(6147) PF TOURS & TRAVELS'},  
      {item_id:'(6148) CAR TRAVELS IN KHAMMAM',item_text: '(6148) CAR TRAVELS IN KHAMMAM'},    
      {item_id:'(6149) Surya travels',item_text: '(6149) Surya travels'},  
      {item_id:'(6150) JANA SUJANA - SURESH, GUDUR - NELLORE RAYALASEEMA',item_text: '(6150) JANA SUJANA - SURESH, GUDUR - NELLORE RAYALASEEMA'},
      {item_id:'(6151) B V RANGA SHALIVAHA, PATTIKONDA - KURNOOL',item_text: '(6151) B V RANGA SHALIVAHA, PATTIKONDA - KURNOOL'},
      {item_id:'(6152) LAKSHMI',item_text: '(6152) LAKSHMI'},    
      {item_id:'(6153) SURA REDDY',item_text: '(6153) SURA REDDY'},
      {item_id:'(6154) RAGHURAMULU THIRUVAIPATI -  - AP, ATMAKUR - NELLORE RAYALASEEMA',item_text: '(6154) RAGHURAMULU THIRUVAIPATI -  - AP, ATMAKUR - NELLORE RAYALASEEMA'},
      {item_id:'(6155) P. SUDHAKAR REDDY, NANDIKOTKUR- KURNOOL',item_text: '(6155) P. SUDHAKAR REDDY, NANDIKOTKUR- KURNOOL'},
      {item_id:'(6156) Y V KOTESHWAR RAO -- ANDHRA PRADESH,  NUZIVEEDU - KRISHNA DIST',item_text: '(6156) Y V KOTESHWAR RAO -- ANDHRA PRADESH,  NUZIVEEDU - KRISHNA DIST'},
      {item_id:'(6159) Marabathula karunakar, Allagadda - KURNOOL',item_text: '(6159) Marabathula karunakar, Allagadda - KURNOOL'},
      {item_id:'(6161) C R PAVAN KUMAR, ANANTAPUR RAYALSEEMA',item_text: '(6161) C R PAVAN KUMAR, ANANTAPUR RAYALSEEMA'},
      {item_id:'(6162) MAKAM MURALIKRISHNA, DHARMAVARAM - ANANTAPUR RAYALSEEMA',item_text: '(6162) MAKAM MURALIKRISHNA, DHARMAVARAM - ANANTAPUR RAYALSEEMA'}, 
      {item_id:'(6163) VIJAYA BHASKAR CHOWDARY - , GOOTY - ANANTAPUR RAYALSEEMA',item_text: '(6163) VIJAYA BHASKAR CHOWDARY - , GOOTY - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6167) MAKAM SRIVALLI, MADAKASIRA - ANANTAPUR RAYALSEEMA',item_text: '(6167) MAKAM SRIVALLI, MADAKASIRA - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6168) Ganesh kumar , Kolapalli - Machilipatnam',item_text: '(6168) Ganesh kumar , Kolapalli - Machilipatnam'},
      {item_id:'(6169) N. CHAITANYA LAKSHMI(NAGOOR BABU ), TADIPATRI - ANANTAPUR RAYALSEEMA',item_text: '(6169) N. CHAITANYA LAKSHMI(NAGOOR BABU ), TADIPATRI - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6170) KUNA SATISH BABU , KALYANADURGAM - ANANTAPUR RAYALSEEMA',item_text: '(6170) KUNA SATISH BABU , KALYANADURGAM - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6171) SRIKANTH LINGAMALLU, TENALI - GUNTUR DIST',item_text: '(6171) SRIKANTH LINGAMALLU, TENALI - GUNTUR DIST'},
      {item_id:'(6173) PULIPATINAGA SAROJINI(RAMA RAO PULIPATI) , SATTENAPALLE - GUNTUR DIST',item_text: '(6173) PULIPATINAGA SAROJINI(RAMA RAO PULIPATI) , SATTENAPALLE - GUNTUR DIST'},
      {item_id:'(6174) KOTHA SEETHA RAMANJANEYULU, NARASARAOPET - GUNTUR',item_text: '(6174) KOTHA SEETHA RAMANJANEYULU, NARASARAOPET - GUNTUR'},
      {item_id:'(6175) PATCHARI MAHESH, MANGALGIRI - GUNTUR',item_text: '(6175) PATCHARI MAHESH, MANGALGIRI - GUNTUR'},
      {item_id:'(6176) VENKATA SRINIVASA MANOHAR TALLURI, PONNURU - GUNTUR',item_text: '(6176) VENKATA SRINIVASA MANOHAR TALLURI, PONNURU - GUNTUR'},
      {item_id:'(6177) LAKSHMI NARAYANA KANCHERLA,  KAKINADA - ( EAST GODAVARI ) RAJAHMUNDRY',item_text: '(6177) LAKSHMI NARAYANA KANCHERLA,  KAKINADA - ( EAST GODAVARI ) RAJAHMUNDRY'},
      {item_id:'(6178) SHAIK MOHAMMED SHAFI, KADIRI - ANANTAPUR RAYALSEEMA',item_text: '(6178) SHAIK MOHAMMED SHAFI , KADIRI - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6179) JAGGA RAMESH BABU, URVAKONDA - ANANTAPUR RAYALSEEMA',item_text: '(6179) JAGGA RAMESH BABU , URVAKONDA - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6180) TANGUDU SIVA KUMAR, HIRAMANDALAM - SRIKAKULAM ANDHRA',item_text: '(6180) TANGUDU SIVA KUMAR , HIRAMANDALAM - SRIKAKULAM ANDHRA'},
      {item_id:'(6184) NAGULURI RATNABABU,  MYLAVARAM - VIJAYAWADA',item_text: '(6184) NAGULURI RATNABABU,  MYLAVARAM - VIJAYAWADA'},
      {item_id:'(6185) PATAN ANSAR KHAN, PENUKONDA - ANANTAPUR RAYALSEEMA',item_text: '(6185) PATAN ANSAR KHAN , PENUKONDA - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6186) MANDAVA SATYANARAYANA BABU, CHILAKALURIPETA - GUNTUR',item_text: '(6186) MANDAVA SATYANARAYANA BABU, CHILAKALURIPETA - GUNTUR'}, 
      {item_id:'(6187) YALAVARTHY HARI PRASAD, PIDUGURALLU - GUNTUR',item_text: '(6187) YALAVARTHY HARI PRASAD, PIDUGURALLU - GUNTUR'},
      {item_id:'(6188) SHAIK MOHAMMED ADIL, RAYACHOTI - CUDDAPAH',item_text: '(6188) SHAIK MOHAMMED ADIL, RAYACHOTI - CUDDAPAH'},
      {item_id:'(6191) NAVEEN BATLI, HUMNABAD - BIDAR',item_text: '(6191) NAVEEN BATLI, HUMNABAD - BIDAR'},
      {item_id:'(6192) U RADHIKA, GUNTAKAL - ANANTAPUR RAYALSEEMA',item_text: '(6192) U RADHIKA, GUNTAKAL - ANANTAPUR RAYALSEEMA'}, 
      {item_id:'(6193) BOGGAVARAPU SOWJANYA ( SIVA ), BAPATLA - GUNTUR',item_text: '(6193) BOGGAVARAPU SOWJANYA ( SIVA ), BAPATLA - GUNTUR'},
      {item_id:'(6194) SRINIVAS KSHIRSAGAR, SEDAM - GULBARGHA',item_text: '(6194) SRINIVAS KSHIRSAGAR, SEDAM - GULBARGHA'},
      {item_id:'(6195) THUMMALA PENTA RAMANJINEYULU, KADAPA RAYALSEEMA',item_text: '(6195) THUMMALA PENTA RAMANJINEYULU, KADAPA RAYALSEEMA'},
      {item_id:'(6197) MYNENI ARUN KUMAR,  NANDHIGAMA AND JAGGAYAPETA',item_text: '(6197) MYNENI ARUN KUMAR,  NANDHIGAMA AND JAGGAYAPETA'},
      {item_id:'(6198) SANJAY HIREMATH,  MUDDEBIHAL - BIJAPUR',item_text: '(6198) SANJAY HIREMATH,  MUDDEBIHAL - BIJAPUR'},
      {item_id:'(6199) BASANAGOUDA KONI ,  KALAGHATAGI - HUBLI',item_text: '(6199) BASANAGOUDA KONI ,  KALAGHATAGI - HUBLI'},
      {item_id:'(6200) SAI SRIKANTH AAREPALLI, GUDIVADA - KRISHNA',item_text: '(6200) SAI SRIKANTH AAREPALLI, GUDIVADA - KRISHNA'},
      {item_id:'(6201) VIJAYKUMAR SATTUR,  DHARWAD',item_text: '(6201) VIJAYKUMAR SATTUR,  DHARWAD'},  
      {item_id:'(6202) SANJEEV VADDODAGI,  SINDAGI - BIJAPUR',item_text: '(6202) SANJEEV VADDODAGI,  SINDAGI - BIJAPUR'},
      {item_id:'(6203) KRISHNA R KADAM , NAVALGUND - DHARWAD - HUBLI',item_text: '(6203) KRISHNA R KADAM , NAVALGUND - DHARWAD - HUBLI'},
      {item_id:'(6204) KRISHNAGOUDA PATIL, MUDHOL - BAGALKOT',item_text: '(6204) KRISHNAGOUDA PATIL, MUDHOL - BAGALKOT'},
      {item_id:'(6205) YENDURI GAYATRI ( PANDU RANGA RAO ) ,  REPALLI - GUNTUR',item_text: '(6205) YENDURI GAYATRI ( PANDU RANGA RAO ) ,  REPALLI - GUNTUR'},
      {item_id:'(6206) SHAMBHULINGA SWAMY, BHALKI - BIDAR',item_text: '(6206) SHAMBHULINGA SWAMY, BHALKI - BIDAR'},
      {item_id:'(6207) RAVINDRA RUNWAL, BIJAPUR',item_text: '(6207) RAVINDRA RUNWAL, BIJAPUR'},  
      {item_id:'(6208) RAVI KANTH NALURU , GANNAVARAM - VIJAYAWADA',item_text: '(6208) RAVI KANTH NALURU , GANNAVARAM - VIJAYAWADA'},
      {item_id:'(6209) GAYATRI RATHOD , BAGEWADI - BIJAPUR',item_text: '(6209) GAYATRI RATHOD , BAGEWADI - BIJAPUR'},
      {item_id:'(6210) GIRISH KUSTAGI, GADAG',item_text: '(6210) GIRISH KUSTAGI, GADAG'},  
      {item_id:'(6211) CHIMATA AJAY KUMAR , AVANIGADDA - KRISHNA',item_text: '(6211) CHIMATA AJAY KUMAR , AVANIGADDA - KRISHNA'},
      {item_id:'(6212) BANDI KIRAN KUMAR REDDY , KADAPA RAYALSEEMA',item_text: '(6212) BANDI KIRAN KUMAR REDDY , KADAPA RAYALSEEMA'}, 
      {item_id:'(6213) ASWINI MYLAPURAM , KADIRI - ANANTAPUR RAYALSEEMA',item_text: '(6213) ASWINI MYLAPURAM , KADIRI - ANANTAPUR RAYALSEEMA'},
      {item_id:'(6214) SUNIL KUMAR KODAGANTI, DEVADURGA - RAICHUR',item_text: '(6214) SUNIL KUMAR KODAGANTI, DEVADURGA - RAICHUR'},
      {item_id:'(6215) NITIN KARIKATTI, DHARWAD',item_text: '(6215) NITIN KARIKATTI, DHARWAD'},  
      {item_id:'(6216) VIKRAM BOLLU, WARANGAL',item_text: '(6216) VIKRAM BOLLU, WARANGAL'},  
      {item_id:'(6217) NOOKALA VENKATA MAHENDRA, BADVEL - KADAPA RAYALSEEMA',item_text: '(6217) NOOKALA VENKATA MAHENDRA, BADVEL - KADAPA RAYALSEEMA'},
      {item_id:'(6218) MADHUSUDAN A Y, SINDHANUR',item_text: '(6218) MADHUSUDAN A Y, SINDHANUR'},
      {item_id:'(6219) PRASANNA SAILAJA NEMANI, ANAKAPALLI - VISAKHAPATNAM ANDHRA',item_text: '(6219) PRASANNA SAILAJA NEMANI, ANAKAPALLI - VISAKHAPATNAM ANDHRA'},
      {item_id:'(6220) VEERESH S BHIMSHETTY, BASAVAKALYAN - BIDAR',item_text: '(6220) VEERESH S BHIMSHETTY, BASAVAKALYAN - BIDAR'}, 
      {item_id:'(6221) PHANI CHAITHANYA MUPARTHI, JAGGAIAHPET - KRISHNA',item_text: '(6221) PHANI CHAITHANYA MUPARTHI, JAGGAIAHPET - KRISHNA'},
      {item_id:'(6222) PRAKASH SHAH (3.4)  ( ANUJ NAGARSHETH (3.3) \/ DHIRAL PATEL(3.3)), VADODARA',item_text: '(6222) PRAKASH SHAH (3.4)  ( ANUJ NAGARSHETH (3.3) \/ DHIRAL PATEL(3.3)), VADODARA'}, 
      {item_id:'(6223) UMANG DESAI, VALSAD',item_text: '(6223) UMANG DESAI, VALSAD'},  
      {item_id:'(6224) DHARMISTHA DAMANIAT, SILVASSA',item_text: '(6224) DHARMISTHA DAMANIAT, SILVASSA'},  
      {item_id:'(6226) PRASHANT PARMAR , SURAT',item_text: '(6226) PRASHANT PARMAR , SURAT'},  
      {item_id:'(6227) ARYA PAL, VAPI WEST',item_text: '(6227) ARYA PAL, VAPI WEST'},
      {item_id:'(6228) ABRAHAM ANAND RAJ BILLA , MARREDPALLY - HYDERABAD',item_text: '(6228) ABRAHAM ANAND RAJ BILLA , MARREDPALLY - HYDERABAD'},
      {item_id:'(6231) SUPREET KUDLOOR-  -KARNATAKA, SHAHAPUR - GULBARGHA',item_text: '(6231) SUPREET KUDLOOR-  -KARNATAKA, SHAHAPUR - GULBARGHA'},
      {item_id:'(6232) RISHI PANCHAL-LOKHAND WALA-ADARSH NAGAR-DN NAGAR -VARSOVA-HILL ROAD-PALI HILL-LINKING ROAD - BANDRA, BANDRA',item_text: '(6232) RISHI PANCHAL-LOKHAND WALA-ADARSH NAGAR-DN NAGAR -VARSOVA-HILL ROAD-PALI HILL-LINKING ROAD - BANDRA, BANDRA'}, 
      {item_id:'(6233) GUDIMETLA PAVAN , JANGAREDDY GUDEM - WEST GODAVARI',item_text: '(6233) GUDIMETLA PAVAN , JANGAREDDY GUDEM - WEST GODAVARI'},
      {item_id:'(6234) SWAMY REDDY PERUGU ,  KURNOOL',item_text: '(6234) SWAMY REDDY PERUGU ,  KURNOOL'},  
      {item_id:'(6235) SANTOSH RAO S, NIZAMABAD',item_text: '(6235) SANTOSH RAO S, NIZAMABAD'},
      {item_id:'(6236) LAVANYA BAREDDY,  PRODDUTUR - KADAPA RAYALSEEMA',item_text: '(6236) LAVANYA BAREDDY,  PRODDUTUR - KADAPA RAYALSEEMA'},
      {item_id:'(6237) ABHISHEK PANCHAL,  MULUND',item_text: '(6237) ABHISHEK PANCHAL,  MULUND'},  
      {item_id:'(6238) MANJUNATH KURUGODU PAALI , NANDYAL - KURNOOL',item_text: '(6238) MANJUNATH KURUGODU PAALI , NANDYAL - KURNOOL'},
      {item_id:'(6241) SUBBA REDDY POLIREDDY, TIRUPATHI',item_text: '(6241) SUBBA REDDY POLIREDDY, TIRUPATHI'},
      {item_id:'(6242) ANIL KUMAR BODDU, TUNI - EAST GODAVARI ANDHRA' ,item_text: '(6242) ANIL KUMAR BODDU, TUNI - EAST GODAVARI ANDHRA' },
      {item_id:'(6244) M MUJAHID , NANJANAGUDU - MYSORE',item_text: '(6244) M MUJAHID , NANJANAGUDU - MYSORE'},
      {item_id:'(6245) SESHU KIRAN RAMINEEDI, RAJAHMUNDRY',item_text: '(6245) SESHU KIRAN RAMINEEDI, RAJAHMUNDRY'},
      {item_id:'(6246) GANGADHAR PRAVEEN GRANDHI, KOVVURU - WEST GODAVARI',item_text: '(6246) GANGADHAR PRAVEEN GRANDHI, KOVVURU - WEST GODAVARI'},
      {item_id:'(6247) DEVA PRAKASH REDDY POLIREDDY, NELLORE RAYALASEEMA',item_text: '(6247) DEVA PRAKASH REDDY POLIREDDY, NELLORE RAYALASEEMA'},
      {item_id:'(6248) LAKSHMI KALLAM , MANGALAGIRI - GUNTUR',item_text: '(6248) LAKSHMI KALLAM , MANGALAGIRI - GUNTUR'},
      {item_id:'(6249) VEERENDRA KOWTHALAM UPPARA , YEMMIGANUR - KURNOOL',item_text: '(6249) VEERENDRA KOWTHALAM UPPARA , YEMMIGANUR - KURNOOL'},
      {item_id:'(6250) POLIREDDY KISHAN KUMAR REDDY, RAYACHOTI - CUDDAPAH',item_text: '(6250) POLIREDDY KISHAN KUMAR REDDY, RAYACHOTI - CUDDAPAH'},
      {item_id:'(6251) SUDAMA CHANDRA SEKHARA REDDY  AP(125), PENUKONDA',item_text: '(6251) SUDAMA CHANDRA SEKHARA REDDY  AP(125), PENUKONDA'},
      {item_id:'(6252) BIKSHMA REDDY PAGADALA,  MIRYALAGUDA - NALGONDA',item_text: '(6252) BIKSHMA REDDY PAGADALA,  MIRYALAGUDA - NALGONDA'},
      {item_id:'(6253) RAMANJENEYA REDDY GAJJALA (125H), CUDDAPAH',item_text: '(6253) RAMANJENEYA REDDY GAJJALA (125H), CUDDAPAH'},
      {item_id:'(6257) LAKSHMAN REDDY GAYAPU, HANMAKONDA',item_text: '(6257) LAKSHMAN REDDY GAYAPU, HANMAKONDA'}, 
      {item_id:'(6258) RAJESHWER REDDY YEDAMALA  (125H), JAGITYALA',item_text: '(6258) RAJESHWER REDDY YEDAMALA  (125H), JAGITYALA'},
      {item_id:'(6259) JAYANTH REDDY POLEPALLY, WARANGAL',item_text: '(6259) JAYANTH REDDY POLEPALLY, WARANGAL'}, 
      {item_id:'(6260) SANATH KUMAR KOYYADI ( 125H ), MEHABUBABAD',item_text: '(6260) SANATH KUMAR KOYYADI ( 125H ), MEHABUBABAD'},
      {item_id:'(6261) PALISETTI UMA - AP, VISHAKAPATNAM',item_text: '(6261) PALISETTI UMA - AP, VISHAKAPATNAM'},
      {item_id:'(6262) JAYANTH REDDY POLEPALLY - TELANGANA(125KH), KHAMMAM',item_text: '(6262) JAYANTH REDDY POLEPALLY - TELANGANA(125KH), KHAMMAM'}, 
      {item_id:'(6263) MALREDDY SHANTHI REDDY & MOTHKOORI SONU NIVAS (125H - 40\/60), RAJENDRA NAGAR - HYDERABAD',item_text: '(6263) MALREDDY SHANTHI REDDY & MOTHKOORI SONU NIVAS (125H - 40\/60), RAJENDRA NAGAR - HYDERABAD'},
      {item_id:'(4003) DASYAM ARJUN, NIRMAL- ADILABAD',item_text: '(4003) DASYAM ARJUN, NIRMAL- ADILABAD'},
      {item_id:'(4004) LAKKAKULA NARESH, MANCHERIAL ',item_text: '(4004) LAKKAKULA NARESH, MANCHERIAL '},
      {item_id:'(4005) RANGU ARUN KUMAR , NIZAMABAD',item_text: '(4005) RANGU ARUN KUMAR , NIZAMABAD'},
      {item_id:'(4008) VIJAYAKUMAR DODDABASAPPA NAGARAL, HUBLI,',item_text: '(4008) VIJAYAKUMAR DODDABASAPPA NAGARAL, HUBLI,'}, 
      {item_id:'(4009) SRIKANTH MYLAVARAPU, KHAMMAM',item_text: '(4009) SRIKANTH MYLAVARAPU, KHAMMAM'},  
      {item_id:'(4012) Shafi MD',item_text: '(4012) Shafi MD'},  
      {item_id:'(4013) ANAND KUMAR H, BANGALORE',item_text: '(4013) ANAND KUMAR H, BANGALORE'},
      {item_id:'(4015) PRUTHVIRAJ P , TUMKUR ',item_text: '(4015) PRUTHVIRAJ P , TUMKUR '},  
      {item_id:'(4016) SUNEETHA DASYAM',item_text: '(4016) SUNEETHA DASYAM'},  
      {item_id:'(4018) AISHWARYA NAVANI , PUNE MAHARASTRA',item_text: '(4018) AISHWARYA NAVANI , PUNE MAHARASTRA'}, 
      {item_id:'(4019) SHASHANK ASHOK SAWANT - , WEST DADAR - MUMBAI',item_text: '(4019) SHASHANK ASHOK SAWANT - , WEST DADAR - MUMBAI'},
      {item_id:'(4021) SUNIL KUMAR R , BANGALORE',item_text: '(4021) SUNIL KUMAR R , BANGALORE'},
      {item_id:'(4023) SATISH HEBBAR  , BANGALORE',item_text: '(4023) SATISH HEBBAR  , BANGALORE'},
      {item_id:'(4024) S M UMADEVI, BANGALORE',item_text: '(4024) S M UMADEVI, BANGALORE'},
      {item_id:'(4025) ESWARAWAKA KOTESWAR REDDY, NELLORE RAYALASEEMA',item_text: '(4025) ESWARAWAKA KOTESWAR REDDY, NELLORE RAYALASEEMA'},
      {item_id:'(4026) M VIJAYAN , HYDERABAD',item_text: '(4026) M VIJAYAN , HYDERABAD'},
      {item_id:'(4027) B SATHISH KUMAR , MANCHERIAL',item_text: '(4027) B SATHISH KUMAR , MANCHERIAL'},
      {item_id:'(4028) Boddu Purna Chandrasekhar Rao & P Satyanarayaan Raju , VIZAYANAGARAM',item_text: '(4028) Boddu Purna Chandrasekhar Rao & P Satyanarayaan Raju , VIZAYANAGARAM'},
      {item_id:'(4029) RAJU R  , VISAKHAPATNAM ANDHRA',item_text: '(4029) RAJU R  , VISAKHAPATNAM ANDHRA'},
      {item_id:'(4030) Silla Srinivas , NARASANNAPET - SRIKAKULAM ANDHRA',item_text: '(4030) Silla Srinivas , NARASANNAPET - SRIKAKULAM ANDHRA'},
      {item_id:'(4031) JUTURU SARITHA , ANANTAPUR RAYALSEEMA',item_text: '(4031) JUTURU SARITHA , ANANTAPUR RAYALSEEMA'},
      {item_id:'(4033) MR.VYAMASANI RAVINDER',item_text: '(4033) MR.VYAMASANI RAVINDER'},  
      {item_id:'(4034) SUMALATHA N - BOMMULURU BAPULAPADU -  ( Ramanjineyulu ), VIJAYAWADA',item_text: '(4034) SUMALATHA N - BOMMULURU BAPULAPADU -  ( Ramanjineyulu ), VIJAYAWADA'},
      {item_id:'(4036) SANTOSH KUMAR HUDGI, GULBARGHA',item_text: '(4036) SANTOSH KUMAR HUDGI, GULBARGHA'}, 
      {item_id:'(4037) Dilli babu Poola',item_text: '(4037) Dilli babu Poola'},  
      {item_id:'(4038) BARLA PRANITHA , KARIMNAGAR',item_text:'(4038) BARLA PRANITHA , KARIMNAGAR'},
      {item_id:'(4040) PALISETTI UMA , SRIKAKULAM ANDHRA',item_text:'(4040) PALISETTI UMA , SRIKAKULAM ANDHRA'},
      {item_id:'(4041) CHIKKALA SESHAGIRI RAO, KAKINADA',item_text:'(4041) CHIKKALA SESHAGIRI RAO, KAKINADA'}, 
      {item_id:'(4042) ASHFAQAHMAD DUBBAL, BELAGAVI NORTH KARNATAKA',item_text:'(4042) ASHFAQAHMAD DUBBAL, BELAGAVI NORTH KARNATAKA'},
      {item_id:'(4043) GOGAGA HOLIDAYS , HYDERABAD',item_text:'4043) GOGAGA HOLIDAYS , HYDERABAD'},  
      {item_id:'(4053) VIJAYA LAKSHMI.K, TIRUPATHI',item_text:'(4053) VIJAYA LAKSHMI.K, TIRUPATHI'},
      {item_id:'(4056) (C.SATYA MAHESH REDDY) E NEST BOXES , KADAPA RAYALSEEMA',item_text:'(4056) (C.SATYA MAHESH REDDY) E NEST BOXES , KADAPA RAYALSEEMA'}, 
      {item_id:'(4059) V MOHINI(SUBRAMANYAM ), GUNTUR',item_text:'(4059) V MOHINI(SUBRAMANYAM ), GUNTUR'}, 
      {item_id:'(4060) MILIN KULKARNI, BIJAPUR',item_text:'(4060) MILIN KULKARNI, BIJAPUR'},  
      {item_id:'(4062) ARUNKUMAR BYALI , HUBLI',item_text:'(4062) ARUNKUMAR BYALI , HUBLI'},  
      {item_id:'(4063) JAGADISH PATIL , BIDAR',item_text:'(4063) JAGADISH PATIL , BIDAR'},  
      {item_id:'(4064) UDAY PRAKASH , CHITRADURGA',item_text:'(4064) UDAY PRAKASH , CHITRADURGA'},
      {item_id:'(4066) RAJENDRA KUMAR S SHIVALE, RAICHUR',item_text:'(4066) RAJENDRA KUMAR S SHIVALE, RAICHUR'}, 
      {item_id:'(4067) VEERESH RAJASHEKAR KEMBAVI  (T R Vinod Kumar), BALLARI',item_text:'(4067) VEERESH RAJASHEKAR KEMBAVI  (T R Vinod Kumar), BALLARI'},
      {item_id:'(4068) ANOOP SARNADGOUD, BAGALKOT',item_text:'(4068) ANOOP SARNADGOUD, BAGALKOT'},  
      {item_id:'(4069) SAMEER KUMAR ATLURI, WARANGAL',item_text:'(4069) SAMEER KUMAR ATLURI, WARANGAL'},  
      {item_id:'(4070) BOMMANA BOINA DEVIKA, KARIMNAGAR',item_text:' 4070) BOMMANA BOINA DEVIKA, KARIMNAGAR'},  
      {item_id:'(4071) ABHISHEK KUSTAGI, GADAG',item_text:'(4071) ABHISHEK KUSTAGI, GADAG'},  
      {item_id:'(4072) PRAPULLA SOMASHEKAR, MYSORE',item_text:'(4072) PRAPULLA SOMASHEKAR, MYSORE'},  
      {item_id:'(4074) JAYASREE HYMA MUDDA, VISAKAPATNAM',item_text:'(4074) JAYASREE HYMA MUDDA, VISAKAPATNAM'}, 
      {item_id:'(4075) KAPIL P , NIZAMABAD',item_text:'(4075) KAPIL P , NIZAMABAD'},
      {item_id:'(4086) SHIV SHIV, HYDERABAD',item_text:'(4086) SHIV SHIV, HYDERABAD'}
    ]; 
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
