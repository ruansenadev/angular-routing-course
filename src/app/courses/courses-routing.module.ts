import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from "./course/course.resolver";
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsListResolver } from './lessons-list/lessons-list.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: ':url', component: CourseComponent, children: [
      { path: '', component: LessonsListComponent, resolve: { lessons: LessonsListResolver } }
    ], resolve: { course: CourseResolver }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver,
    LessonsListResolver
  ]
})
export class CoursesRoutingModule {



}
