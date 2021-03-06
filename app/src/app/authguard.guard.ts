import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import  { UserService} from './user.service';
import { Router } from '@angular/router/src/router';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private user: UserService) {   }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot, ): Observable<boolean> | Promise<boolean> | boolean {
     if(this.user.getUserLoggedIn()){
       return true;
     } 
     
      return false;
  }
}
