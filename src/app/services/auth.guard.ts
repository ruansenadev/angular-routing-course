import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree, CanActivateChild } from '@angular/router';
import { AuthStore } from "./auth.store";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthStore) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkAuthStatus()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // loggedIn emits a boolean so map it to return true or urltree
    return this.checkAuthStatus()
  }

  checkAuthStatus(): Observable<boolean | UrlTree> {
    return this.authService.isLoggedIn$
      .pipe(map(loggedIn => loggedIn ? true : this.router.parseUrl('/login')))
  }
}
