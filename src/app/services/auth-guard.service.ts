import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService  implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate() {
    if (this.auth.isAuthenticated) {
      console.log('guard true');
      return true;
    } else {
      console.log('guard false');
      return false;
    }
  }
}
