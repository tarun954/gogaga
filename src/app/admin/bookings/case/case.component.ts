import { Component } from '@angular/core'; 
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent {
  constructor(private api:ApiService, private activeroute:ActivatedRoute, private router:Router,private toastr:ToastrService){
    
  }
  convertToInt(val: any){
    return parseInt(val);
  }
  dataid:any;
  data:any
  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('id')
    }); 
    this.api.getBookingbyid(this.dataid).subscribe((data:any)=>{
      this.data = data
      console.log(this.data)
    }) 
      
   }
}
