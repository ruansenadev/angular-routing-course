import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonDetail } from "../model/lesson-detail";
import { CoursesService } from "../services/courses.service";

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {
  constructor(private coursesService: CoursesService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<LessonDetail> {
    const courseUrl = route.parent.paramMap.get('url'),
      lessonSeq = route.paramMap.get('seq')
    return this.coursesService.loadLessonDetail(courseUrl, lessonSeq)
  }
}
