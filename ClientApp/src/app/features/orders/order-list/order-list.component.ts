import { Component, OnInit, Output, Input, EventEmitter, OnDestroy, OnChanges } from '@angular/core';
import { Order } from '../order.model';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';

import { AppSettingsService } from '../../../shared/appsettings.service'
import { SpinnerService } from './../../../shared/spinner.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [AppSettingsService, SpinnerService]
})
export class OrderListComponent implements OnInit, OnChanges, OnDestroy {
  @Output() orderAlreadySelected = new EventEmitter<Order>();
  @Input() readOrders: Order[];

  title = '';
  @Input() set newList(val) {
    this.title = val;
    this.getAllOrders();
  }

  private allOrders: Subscription;

  showSpinner: boolean;

  orders: Order[] = this.orderService.orders;

  constructor(
    private orderService: OrderService,
    public spinnerService: SpinnerService
  ) {

  }

  ngOnInit(): void {

    this.getAllOrders();

  }

  ngOnDestroy(): void {
    this.allOrders.unsubscribe();
  }

  ngOnChanges() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders()
      //.pipe(
      //  tap(c => console.log(`Got orders: ${JSON.stringify(c)}`))
      //)
      .subscribe(
        (orders: Order[]) => this.orders = orders
    );
  }

  onOrderSelected(order: Order) {
    this.orderAlreadySelected.emit(order);
  }
}
