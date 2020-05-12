import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './features/orders/orders.component';
import { OrderDetailComponent } from './features/orders/order-detail/order-detail.component';
import { OrderListComponent } from './features/orders/order-list/order-list.component';
import { OrderItemComponent } from './features/orders/order-list/order-item/order-item.component';
import { SearchComponent } from './features/orders/search/search.component';
import { TripComponent } from './features/trip/trip.component';
import { CargoComponent } from './features/trip/cargo/cargo.component';
import { MapComponent } from './features/trip/map/map.component';
import { PaymentComponent } from './features/trip/payment/payment.component';
import { CompanyComponent } from './features/company/company.component';
import { FleetComponent } from './features/company/fleet/fleet.component';
import { CarComponent } from './features/company/fleet/car/car.component';
import { CarItemComponent } from './features/company/fleet/car/car-item/car-item.component';
import { DriverComponent } from './features/company/fleet/driver/driver.component';
import { DriverItemComponent } from './features/company/fleet/driver/driver-item/driver-item.component';
import { CompanySummaryComponent } from './features/company/company-summary/company-summary.component';
import { CommentsComponent } from './features/comments/comments.component';
import { CommentListComponent } from './features/comments/comment-list/comment-list.component';
import { CommentItemComponent } from './features/comments/comment-list/comment-item/comment-item.component';
import { UserDashboardComponent } from './features/pages/user-dashboard/user-dashboard.component';
import { CompaniesListComponent } from './features/pages/companies-list/companies-list.component';
import { OrderSearchComponent } from './features/pages/order-search/order-search.component';
import { LoginPageComponent } from './core/admin/login/login-page/login-page.component';
import { AccountSetupComponent } from './core/admin/account-setup/account-setup.component';
import { UserProfileComponent } from './core/admin/user-profile/user-profile.component';
import { SettingsPageComponent } from './core/admin/settings-page/settings-page.component';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { MenuBarComponent } from './shared/components/layout/menu-bar/menu-bar.component';
import { HamburgerMenuComponent } from './shared/components/layout/menu-bar/hamburger-menu/hamburger-menu.component';
import { SidebarComponent } from './shared/components/layout/sidebar/sidebar.component';
import { MainPanelComponent } from './shared/components/layout/main-panel/main-panel.component';
import { PopupComponent } from './shared/components/layout/popup/popup.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    OrdersComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderItemComponent,
    SearchComponent,
    TripComponent,
    CargoComponent,
    MapComponent,
    PaymentComponent,
    CompanyComponent,
    FleetComponent,
    CarComponent,
    CarItemComponent,
    DriverComponent,
    DriverItemComponent,
    CompanySummaryComponent,
    CommentsComponent,
    CommentListComponent,
    CommentItemComponent,
    UserDashboardComponent,
    CompaniesListComponent,
    OrderSearchComponent,
    AccountSetupComponent,
    UserProfileComponent,
    SettingsPageComponent,

    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,

    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
