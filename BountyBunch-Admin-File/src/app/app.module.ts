import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { SubAdminDetailComponent } from './sub-admin-detail/sub-admin-detail.component';
import { SubAdminDetailEditComponent } from './sub-admin-detail-edit/sub-admin-detail-edit.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SubAdminAddComponent } from './sub-admin-add/sub-admin-add.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { UserManagementDetailComponent } from './user-management-detail/user-management-detail.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { PostManagementDetailComponent } from './post-management-detail/post-management-detail.component';
import { OfferManagementComponent } from './offer-management/offer-management.component';
import { BlissBundleComponent } from './bliss-bundle/bliss-bundle.component';
import { ReportComponent } from './report/report.component';
import { ReportUserComponent } from './report-user/report-user.component';
import { ReportPostComponent } from './report-post/report-post.component';
import { ReportAnnonymousComponent } from './report-annonymous/report-annonymous.component';
import { HourlyBonusComponent } from './hourly-bonus/hourly-bonus.component';
import { ViewHourlyBonusComponent } from './view-hourly-bonus/view-hourly-bonus.component';
import { EditHourlyBonusComponent } from './edit-hourly-bonus/edit-hourly-bonus.component';
import { FinanceManagementComponent } from './finance-management/finance-management.component';
import { InquiryManagementComponent } from './inquiry-management/inquiry-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { FaqManagementComponent } from './faq-management/faq-management.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';
import { StaticContentManagementComponent } from './static-content-management/static-content-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    ResetPasswordComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    SubAdminComponent,
    SubAdminDetailComponent,
    SubAdminDetailEditComponent,
    UserManagementComponent,
    SubAdminAddComponent,
    UserManagementDetailComponent,
    PostManagementComponent,
    PostManagementDetailComponent,
    OfferManagementComponent,
    BlissBundleComponent,
    ReportComponent,
    ReportUserComponent,
    ReportPostComponent,
    ReportAnnonymousComponent,
    HourlyBonusComponent,
    ViewHourlyBonusComponent,
    EditHourlyBonusComponent,
    FinanceManagementComponent,
    InquiryManagementComponent,
    CategoryManagementComponent,
    FaqManagementComponent,
    NotificationManagementComponent,
    StaticContentManagementComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule, 
    NgxSliderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
