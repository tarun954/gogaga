import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendace',
  templateUrl: './attendace.component.html',
  styleUrls: ['./attendace.component.css']
})
export class AttendaceComponent {
  count:number = 0;
  total:any;
  attendanceform!:FormGroup;
  onevalue:any;
  twovalue:any;
  threevalue:any;
  attendancet: any;
  constructor(private api:ApiService,private http:HttpClient,private formBuilder:FormBuilder, private activeroute:ActivatedRoute, private router:Router,private toastr:ToastrService){
    this.attendanceform = this.formBuilder.group({
      one:'',
      two:'',
      three:'',
      attendancet:[]
    });
    // this.attendaceform.get('netcost')?.valueChanges.subscribe((selectedValue:any)=>{
    //   console.log("netcostvalue,",selectedValue)
    // });
    this.attendanceform.get('one')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("one,",selectedValue)
      this.onevalue = selectedValue;
    })
    this.attendanceform.get('two')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("two,",selectedValue)
      this.twovalue = selectedValue;
    });
    this.attendanceform.get('three')?.valueChanges.subscribe((selectedValue:any)=>{
      console.log("three,",selectedValue)
      this.threevalue = selectedValue;
      let x ;
      x=Number(this.onevalue)+Number(this.twovalue)+Number(this.threevalue);
      // console.log("xvalue",x);
      // console.log("xvalue",x);
      this.attendanceform.controls['attendancet'].setValue(x);

    });
    const value = JSON.parse(localStorage.getItem('formValue')!); 
    // 3 - Update local storage on every modification
    this.attendanceform.valueChanges.subscribe(value => {
      localStorage.setItem('attendancet', JSON.stringify(this.attendanceform.value));
    });

  }
  public saveAttendance(){
    
  }
  ngOnInit(): void { 
     
  }
  // checked(){
  //   this.total = this.count+1 
  //   this.total.set
  // } 
  submit()
  {
  
    if(this.attendanceform.valid){
      const value = this.attendanceform.value
       
    }
  }
}
