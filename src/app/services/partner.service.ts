import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http:HttpClient){
    
  }
  apiurl='http://localhost:3000/partnerlogin';
   GetAll(){
     return this.http.get(this.apiurl);
   }
   Getcode(id:any){
     return this.http.get(this.apiurl+'/'+id);
   }
   GetRole(){
     return this.http.get('http://localhost:3000/roles');
   }

   Proceed(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
   Updatepartner(id:any,inputdata:any){
     return this.http.put(this.apiurl+'/'+id,inputdata)
   }
   IsLogged(){
     return sessionStorage.getItem('partnername')!=null;
   }
   GetUserrole(){
     return sessionStorage.getItem('partnername')!=null?sessionStorage.getItem('partnername')?.toString():'';
   }
}
