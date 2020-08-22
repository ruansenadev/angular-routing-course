import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from "./course/course.resolver";
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsListResolver } from './lessons-list/lessons-list.resolver';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonDetailResolver } from "./lesson/lesson-detail.resolver";
import { AuthGuard } from "../services/auth.guard";
import { ExitCourseGuard } from "../courses/course/course-exit.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: ':url',
    component: CourseComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canDeactivate: [ExitCourseGuard],
    children: [
      { path: '', component: LessonsListComponent, resolve: { lessons: LessonsListResolver } },
      { path: 'lessons/:seq', component: LessonDetailComponent, resolve: { lesson: LessonDetailResolver } },
    ],
    resolve: { course: CourseResolver }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    CourseResolver,
    LessonsListResolver,
    LessonDetailResolver,
    ExitCourseGuard
  ]
})
export class CoursesRoutingModule {

}
