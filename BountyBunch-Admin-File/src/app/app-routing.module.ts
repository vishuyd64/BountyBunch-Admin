import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlissBundleComponent } from './bliss-bundle/bliss-bundle.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditHourlyBonusComponent } from './edit-hourly-bonus/edit-hourly-bonus.component';
import { FaqManagementComponent } from './faq-management/faq-management.component';
import { FinanceManagementComponent } from './finance-management/finance-management.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HourlyBonusComponent } from './hourly-bonus/hourly-bonus.component';
import { InquiryManagementComponent } from './inquiry-management/inquiry-management.component';
import { LoginComponent } from './login/login.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';
import { OfferManagementComponent } from './offer-management/offer-management.component';
import { PostManagementDetailComponent } from './post-management-detail/post-management-detail.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { ReportAnnonymousComponent } from './report-annonymous/report-annonymous.component';
import { ReportPostComponent } from './report-post/report-post.component';
import { ReportUserComponent } from './report-user/report-user.component';
import { ReportComponent } from './report/report.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { StaticContentManagementComponent } from './static-content-management/static-content-management.component';
import { SubAdminAddComponent } from './sub-admin-add/sub-admin-add.component';
import { SubAdminDetailEditComponent } from './sub-admin-detail-edit/sub-admin-detail-edit.component';
import { SubAdminDetailComponent } from './sub-admin-detail/sub-admin-detail.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { UserManagementDetailComponent } from './user-management-detail/user-management-detail.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ViewHourlyBonusComponent } from './view-hourly-bonus/view-hourly-bonus.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sub-admin', component: SubAdminComponent },
  { path: 'sub-admin-detail', component: SubAdminDetailComponent },
  { path: 'edit-sub-admin-detail', component: SubAdminDetailEditComponent },
  { path: 'add-sub-admin', component: SubAdminAddComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'user-management-detail', component: UserManagementDetailComponent },
  { path: 'post-management', component: PostManagementComponent },
  { path: 'post-management-detail', component: PostManagementDetailComponent },
  { path: 'offer-management', component: OfferManagementComponent },
  { path: 'bliss-bundle', component: BlissBundleComponent },
  { path: 'report', component: ReportComponent },
  { path: 'user-report', component: ReportUserComponent },
  { path: 'post-report', component: ReportPostComponent },
  { path: 'annonymous-report', component: ReportAnnonymousComponent },
  { path: 'hourly-bonus', component: HourlyBonusComponent },
  { path: 'edit-hourly-bonus', component: EditHourlyBonusComponent },
  { path: 'view-hourly-bonus', component: ViewHourlyBonusComponent },
  { path: 'finance', component: FinanceManagementComponent },
  { path: 'inquiry', component: InquiryManagementComponent },
  { path: 'category-management', component: CategoryManagementComponent },
  { path: 'faq-management', component: FaqManagementComponent },
  { path: 'notification-management', component: NotificationManagementComponent },
  { path: 'static-content-management', component: StaticContentManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
