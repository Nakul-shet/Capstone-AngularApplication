import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  
  canActivate(): boolean {
    if(sessionStorage.getItem("admin") != null){
      return true
    }
    return false
  }
  
}
