import { Component, OnInit } from '@angular/core';

import { Order } from './order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';

  selectedOrder: Order;


  constructor() { }

  ngOnInit(): void {
  }

}
