import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonSummary } from "../model/lesson-summary";
import { CoursesService } from "../services/courses.service";

@Injectable({ providedIn: 'root' })
export class LessonsListResolver implements Resolve<LessonSummary[]> {
  constructor(private coursesService: CoursesService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<LessonSummary[]> {
    const courseUrl = route.parent.paramMap.get('url')
    return this.coursesService.loadAllCourseLessonsSummary(courseUrl)
  }
}
