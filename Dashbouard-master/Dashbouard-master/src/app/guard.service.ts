import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  statRoute:any;

  constructor( private router: Router) { }
  ngOnInit(): void {
    this.statRoute = localStorage.setItem("stateLog", this.statRoute);
  
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      
      let loginData =localStorage["isLogin"];
      if(loginData){
        return true;
      
      }
      this.router.navigateByUrl('login')
    return false;

  }
  
}
