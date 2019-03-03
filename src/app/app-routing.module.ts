import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListApplicantsComponent } from './pages/list-applicants/list-applicants.component';
import { ProfileComponent } from './pages/profile/profile.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'applicants', component: ListApplicantsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
