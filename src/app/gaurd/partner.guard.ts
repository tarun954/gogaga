import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from '../services/partner.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerGuard implements CanActivate {
  constructor(private partner:PartnerService,private router:Router,private toastr:ToastrService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.partner.IsLogged()){
        if(route.url.length>0){
          let leftbar = route.url[0].path;
          if(leftbar=='user'){
            if(this.partner.GetUserrole()=='admin'){
              return true
            }else{
              this.toastr.warning("You don't have access");
              this.router.navigate(['/admin/dashboard'])
              return false;
            }
          }else{
            return true
          }
        }else{
          return true;
        }
      }else{
        this.router.navigate(['/admin/dashboard']);
        return false;
      } 
  }
  
}
