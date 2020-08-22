import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { CourseComponent } from './course.component';

@Injectable()
export class ExitCourseGuard implements CanDeactivate<CourseComponent> {
  canDeactivate(
    component: CourseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): boolean {
    return component.confirmExit()
  }
}
