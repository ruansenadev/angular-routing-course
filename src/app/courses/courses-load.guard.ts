import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthStore } from "../services/auth.store";
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CoursesLoadGuard implements CanLoad {
  constructor(private authService: AuthStore, private router: Router) { }

  canLoad(route: Route): Observable<boolean> {
    return this.authService.isLoggedIn$
      .pipe(
        first(),
        tap(loggedIn => {
          if (!loggedIn) this.router.navigateByUrl('/login')
        })
      )
  }
}
