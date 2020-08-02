import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order.model';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;

  @Input() isIconVisible: boolean;

    constructor() { }

  ngOnInit(): void {
    this.isIconVisible = this.order.driverRequired;
  }


}
