import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, UrlSerializer } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesLoadGuard } from "./courses/courses-load.guard";
import { PreloadingStrategyModules } from "./services/preloading.strategy";

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    data: {
      preload: true
    }
    // canLoad: [CoursesLoadGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadingStrategyModules
    })
  ],
  exports: [RouterModule],
  providers: [
    PreloadingStrategyModules
    // CoursesLoadGuard
  ]
})
export class AppRoutingModule {


}
