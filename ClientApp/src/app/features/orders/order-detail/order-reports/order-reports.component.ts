import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Order } from '../../order.model';
import { OrderService } from '../../order.service';
import { OrderReport } from '../order-reports/order-report.model';

@Component({
  selector: 'app-order-reports',
  templateUrl: './order-reports.component.html',
  styleUrls: ['./order-reports.component.css']
})
export class OrderReportsComponent implements OnInit {
  @Output() orderAlreadySelected = new EventEmitter<Order>();

  orderReport: Array<OrderReport> = [];
  orders: Order[] = this.orderService.orders;
  nextOrder: Order = this.orderService.order;
  statuses = new Array();

  next: string;
  nextOrderLabel: string = '';
  new: number;
  inProgress: number;
  onHold: number;
  finished: number;
  cancelled: number;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.statuses = this.orderService.getStatuses();

    this.orderService.getAllOrders()
      .subscribe(
        (orders: Order[]) => {
          this.orders = orders;

          this.nextOrder = this.findNextLocation();
          if (new Date(this.nextOrder.dateStart) > new Date()) {
            this.nextOrderLabel = "Your next order";
          } else {
            this.nextOrderLabel = "Your last order";
          }
          this.next = this.nextOrder.location;
          this.new = this.orders.filter(status => status.status === 1).length;
          this.inProgress = this.orders.filter(status => status.status === 4).length;
          this.onHold = this.orders.filter(status => status.status === 2).length;
          this.finished = this.orders.filter(status => status.status === 6).length;
          this.cancelled = this.orders.filter(status => status.status === 7).length;
        }
      );
  }

  findNextLocation() {

    let today = new Date();
    let nextLocation: Order;

    let nextOrders: Order[];

    this.orders.sort((a, b) =>
      (a.dateStart > b.dateStart) ? 1 : ((a.dateStart < b.dateStart) ? -1 : 0));

    nextOrders = this.orders.filter(start => new Date(start.dateStart) > today);

    if (nextOrders.length == 0) {
      nextLocation = this.orders.filter(start => new Date(start.dateStart) < today).reverse()[0];
    } else {
      nextLocation = nextOrders[0];
    }

    return nextLocation;
  }

  onTheNextOrder(order: Order) {
    this.orderAlreadySelected.emit(order);
  }

}
