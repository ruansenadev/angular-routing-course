import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";

@Injectable({ providedIn: 'root' })
export class CourseResolver implements Resolve<Course> {
  constructor(private coursesService: CoursesService) {

  }
  resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    const courseUrl = route.paramMap.get('url')
    return this.coursesService.loadCourseByUrl(courseUrl)
  }
}
