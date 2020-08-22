import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouteConfigLoadStart, RouteConfigLoadEnd } from "@angular/router";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() routing: boolean = false;
  @Input() detectRoutingTransition: boolean = false;

  constructor(public loadingService: LoadingService, private router: Router) {

  }

  ngOnInit() {
    // subscribes to router events and activates the loading on changing the route or downloading a new module bundle
    if (this.detectRoutingTransition) {
      this.router.events.subscribe((e: RouterEvent) => {
        if (e instanceof NavigationStart ||
          e instanceof RouteConfigLoadStart) {
          this.loadingService.loadingOn();
        } else if (e instanceof NavigationEnd ||
          e instanceof NavigationError ||
          e instanceof NavigationCancel ||
          e instanceof RouteConfigLoadEnd) {
          this.loadingService.loadingOff();
        }
      })
    }
  }


}
