import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()

export class RouteGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivate() {
    let isUserLoggedin = this.loginService.isUserLoggedIn();
    if (isUserLoggedin) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
