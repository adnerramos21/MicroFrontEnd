import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from 'src/custom-material-module/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ContentComponent } from './layout/content/content.component';
import { HeaderComponent } from './layout/header/header.component';
import { NotificationPanelComponent } from './layout/notification-panel/notification-panel.component';
import { SidebarPanelComponent } from './layout/sidebar-panel/sidebar-panel.component';
import { SkillCheckerComponent } from './utilities/skill-checker/skill-checker.component';
import { ListApplicantsComponent } from './pages/list-applicants/list-applicants.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ListApplicantsService } from './pages/list-applicants/list-applicants.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './pages/dashboard/dashboard.service';
import { ProfileComponent } from './pages/profile/profile.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    NotificationPanelComponent,
    SidebarPanelComponent,
    SkillCheckerComponent,
    ListApplicantsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
  ],
  providers: [
    ListApplicantsService,
    DashboardService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
