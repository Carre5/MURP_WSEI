import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { OrdersComponent } from './orders.component'
import { OrdersRoutingModule } from './orders-routing.module'
import { OrderDetailComponent } from './order-detail/order-detail.component'
import { OrderListComponent } from './order-list/order-list.component'
import { OrderItemComponent } from './order-list/order-item/order-item.component'

@NgModule({
    imports: [
      CommonModule,
      MatGridListModule,
      FlexLayoutModule,
      MatCardModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,

      OrdersRoutingModule
    ],
    declarations: [OrdersComponent, OrderDetailComponent, OrderListComponent, OrderItemComponent]
  })
  export class OrdersModule {}
  