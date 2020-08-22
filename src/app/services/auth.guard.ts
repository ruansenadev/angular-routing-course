import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthStore } from "./auth.store";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthStore) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    // loggedIn emits a boolean so map it to return true or urltree
    return this.authService.isLoggedIn$
      .pipe(map(loggedIn => loggedIn ? true : this.router.parseUrl('/login')))
  }
}
