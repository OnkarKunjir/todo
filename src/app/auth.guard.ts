import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let cookies = document.cookie.split(';');
      for(let i =0; i<cookies.length; i++){
        let c = cookies[i].split('=');
        if(c[0].trim() === "connected" && c[1].trim() === "true"){
          return true;
        }
      }

      this.router.navigate(['sign-up']);
      return false;
  }
  
}
