import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderTabComponent } from './order-tab/order-tab.component';

const routes: Routes = [
  {
    path: '',
    component: OrderTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
