import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   constructor(private http:HttpClient){
    
   }
   apiurl='http://localhost:3000/signup';
    GetAll(){
      return this.http.get(this.apiurl);
    }
    Getbycode(id:any){
      return this.http.get(this.apiurl+'/'+id);
    }
    GetAllRole(){
      return this.http.get('http://localhost:3000/role');
    }
    GetAllTeam(){
      return this.http.get('http://localhost:3000/team');
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
