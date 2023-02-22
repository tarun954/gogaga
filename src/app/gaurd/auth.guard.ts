import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService,private router:Router,private toastr:ToastrService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.IsLoggedIn()){
        if(route.url.length>0){
          let leftbar = route.url[0].path;
          if(leftbar=='user'){
            if(this.service.GetUserrole()=='admin'){
              return true
            }else{
              this.toastr.warning("You don't have access");
              this.router.navigate(['admin/dashboard'])
              return false;
            }
          }else{
            return true
          }
        }else{
          return true;
        }
      }else{
        this.router.navigate(['']);
        return false;
      } 
  }
  
}
