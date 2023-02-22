import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   constructor(private http:HttpClient){
    
   }
   apiurl='https://json-server-nvp8.onrender.com/signup';
    GetAll(){
      return this.http.get(this.apiurl);
    }
    Getbycode(id:any){
      return this.http.get(this.apiurl+'/'+id);
    }
    GetAllRole(){
      return this.http.get('https://json-server-nvp8.onrender.com/role');
    }

    Proceedreg(inputdata:any){
      return this.http.post(this.apiurl,inputdata)
    }
    Updateuser(id:any,inputdata:any){
      return this.http.put(this.apiurl+'/'+id,inputdata)
    }
    IsLoggedIn(){
      return sessionStorage.getItem('username')!=null;
    }
    GetUserrole(){
      return sessionStorage.getItem('username')!=null?sessionStorage.getItem('username')?.toString():'';
    }
}
