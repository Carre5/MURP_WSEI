import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppSettingsService } from '../../shared/appsettings.service'

import { GoogleMapsModule } from '@angular/google-maps'

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomHttpInterceptor } from './../../shared/http-interceptor';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { OrderService } from './order.service'
import { OrderDirective } from './order.directive'

import { OrdersComponent } from './orders.component'
import { OrdersRoutingModule } from './orders-routing.module'
import { OrderDetailComponent } from './order-detail/order-detail.component'
import { OrderListComponent } from './order-list/order-list.component'
import { OrderItemComponent } from './order-list/order-item/order-item.component';
import { OrderMapComponent } from './order-detail/order-map/order-map.component';
import { OrderModifyComponent } from './order-detail/order-modify/order-modify.component';
import { OrderTabComponent } from './order-tab/order-tab.component';
import { OrderReportsComponent } from './order-detail/order-reports/order-reports.component';
import { ExplorePageComponent } from './search/explore-page/explore-page.component';
import { ExploreItemComponent } from './search/explore-page/explore-item/explore-item.component'
import { ExploreTabPipe } from './search/explore-page/explote-tab-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    HttpClientModule,

    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,

    ScrollingModule,

    OrdersRoutingModule
  ],
  entryComponents: [OrderModifyComponent],
  declarations: [OrdersComponent,
                OrderDetailComponent,
                OrderListComponent,
                OrderItemComponent,
                OrderMapComponent,
                OrderModifyComponent,
                OrderTabComponent,
                OrderDirective,
                OrderReportsComponent,
                ExplorePageComponent,
    ExploreItemComponent,
    ExploreTabPipe],
  providers: [AppSettingsService, OrderService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }]
})
export class OrdersModule { }
