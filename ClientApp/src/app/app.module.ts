import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripComponent } from './features/trip/trip.component';
import { CargoComponent } from './features/trip/cargo/cargo.component';
import { MapComponent } from './features/trip/map/map.component';
import { PaymentComponent } from './features/trip/payment/payment.component';
import { FleetComponent } from './features/company/fleet/fleet.component';
import { CarComponent } from './features/company/fleet/car/car.component';
import { CarItemComponent } from './features/company/fleet/car/car-item/car-item.component';
import { DriverComponent } from './features/company/fleet/driver/driver.component';
import { DriverItemComponent } from './features/company/fleet/driver/driver-item/driver-item.component';
import { CommentListComponent } from './features/comments/comment-list/comment-list.component';
import { CommentItemComponent } from './features/comments/comment-list/comment-item/comment-item.component';
import { UserDashboardComponent } from './features/pages/user-dashboard/user-dashboard.component';
import { CompaniesListComponent } from './features/pages/companies-list/companies-list.component';
import { OrderSearchComponent } from './features/pages/order-search/order-search.component';
import { AccountSetupComponent } from './core/admin/account-setup/account-setup.component';
import { UserProfileComponent } from './core/admin/user-profile/user-profile.component';
import { SettingsPageComponent } from './core/admin/settings-page/settings-page.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    AppComponent,
        TripComponent,
        CargoComponent,
        MapComponent,
        PaymentComponent,
        FleetComponent,
        CarComponent,
        CarItemComponent,
        DriverComponent,
        DriverItemComponent,
        CommentListComponent,
        CommentItemComponent,
        UserDashboardComponent,
        CompaniesListComponent,
        OrderSearchComponent,
        AccountSetupComponent,
        UserProfileComponent,
        SettingsPageComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
      HttpClientModule,

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
