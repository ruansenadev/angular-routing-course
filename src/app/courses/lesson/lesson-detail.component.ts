import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson$: Observable<LessonDetail>;

  constructor(private route: ActivatedRoute, private router: Router) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    console.log(this.route.data)
    this.lesson$ = this.route.data.pipe(map(data => data['lesson']))
  }

  previous(seq: number): void {
    this.router.navigate(['lessons', seq - 1], { relativeTo: this.route.parent })
  }
  next(seq: number): void {
    this.router.navigate(['lessons', seq + 1], { relativeTo: this.route.parent })
  }

}
