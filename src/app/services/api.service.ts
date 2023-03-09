import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  
  postItinerary(data:any):Observable<any>{
    return this.http.post<any>("https://json-server-nvp8.onrender.com/itinerary",data);
  }
  updateItinerary(data:any,id:number):Observable<any>{
    return this.http.put<any>("https://json-server-nvp8.onrender.com/itinerary/"+id,data)
  }
  restoreitineary(data:any):Observable<any>{
    return this.http.post<any>("https://json-server-nvp8.onrender.com/deleteddata/",data)
  }
  gertestore():Observable<any>{
    return this.http.get<any>("https://json-server-nvp8.onrender.com/deleteddata/")
  }
  getbyid(id:string):Observable<any>{
    return this.http.get<any>("https://json-server-nvp8.onrender.com/itinerary/"+id)
  }
  submit(data:any):Observable<any>{
    return this.http.post<any>("https://json-server-nvp8.onrender.com/submitted",data)
  }
  getsubmit():Observable<any>{
    return this.http.get<any>("https://json-server-nvp8.onrender.com/submitted")
  }
  deleteItinerary(id:number):Observable<any>{
    return this.http.delete<any>(`https://json-server-nvp8.onrender.com/itinerary/${id}`)
  }
   
  getItinerary():Observable<any>{
    return this.http.get<any>("https://json-server-nvp8.onrender.com/itinerary");
  }
  addfinancial(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/financial",data)
  }
  getfinancial():Observable<any>{
    return this.http.get<any>("http://localhost:3000/financial");
  }
   postBooking(data:any):Observable<any>{
    return this.http.post<any>("https://json-server-nvp8.onrender.com/booking",data)
   }
   updateBooking(datas:any,ids:number):Observable<any>{
    return this.http.put<any>("https://json-server-nvp8.onrender.com/booking/"+ids,datas)
  }
  getBookingbyid(id:string):Observable<any>{
    return this.http.get<any>("https://json-server-nvp8.onrender.com/booking/"+id)
  }
   getBooking():Observable<any>{
    return this.http.get<any>("https://json-server-nvp8.onrender.com/booking")
   }
  postLead(data : any):Observable<any>{
    return this.http.post<any>("https://json-server-nvp8.onrender.com/leadlist",data);
  }
  getLead():Observable<any>{
    return this.http.get<any>("https://json-server-nvp8.onrender.com/leadlist")
  }
  postversion(data:any):Observable<any>{
    return this.http.post<any>("https://json-server-nvp8.onrender.com/versions",data)
  }
  getversion():Observable<any>{
    return this.http.get<any>("https://json-server-nvp8.onrender.com/versions")
  }
  getroles():Observable<any>{
    return this.http.get<any>("http://localhost:3000/signup")
  }
  postteam(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/teamlist",data)
  }
  getteam( ):Observable<any>{
    return this.http.get<any>("http://localhost:3000/teamlist")
  }
  postpayable(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/payables/",data)
   }
  //  getpayablebyid(id:string):Observable<any>{
  //    return this.http.get<any>("http://localhost:3000/payables/"+id)
  //  }
   getpayable():Observable<any>{
     return this.http.get<any>("http://localhost:3000/payables/")
    }

   
}
