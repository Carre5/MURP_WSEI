import {
  Component, OnInit, ViewContainerRef, EventEmitter,
  Output, Input, ViewChild, ComponentFactoryResolver, OnDestroy, AfterViewInit
} from '@angular/core';
import { Order } from './order.model';
import { OrderService } from './order.service';

import { OrderModifyComponent } from './order-detail/order-modify/order-modify.component'
import { OrderListComponent } from './order-list/order-list.component'
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppSettingsService } from '../../shared/appsettings.service';
import { OrderDirective } from './order.directive'

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [AppSettingsService, OrderService]
})

export class OrdersComponent implements OnInit, OnDestroy {
  @ViewChild(OrderDirective) addOrderDirective: OrderDirective;
  
  @ViewChild(OrderModifyComponent) modify: OrderModifyComponent;
  @ViewChild(OrderModifyComponent) list: OrderListComponent;
  @Output() orderToEdit = new EventEmitter<void>();
  private allOrders: Subscription;

  public clickedEvent: Event;

  // Set title of childtwo component 
  newOrderList: any = 'Child Two';

  // Update childTwo's title from childOne
  readOrderList(event) {
    this.orderModifyPanelExpanded = false;
    this.newOrderList = event;
  }



  order: Order;
  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  interval: any;
  orders: Order[] = this.orderService.orders;
  orderId: number;

  selectedOrder: Order;
  isEditMode: boolean;

  orderDetailsPanelExpanded: boolean;
  orderModifyPanelExpanded: boolean;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.allOrders = this.orderService.refreshOrderList$
      .subscribe(
        () => this.getAllOrders());
  }

  loadMap() {

  }

  private getAllOrders() {

    this.orderService.getAllOrders()
      .pipe(
        tap(c => console.log(`Got orders: ${JSON.stringify(c)}`))
      )
      .subscribe(
        (orders: Order[]) => this.orders = orders
    );
  }

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }

  onOrderToModify(order: Order) {
    this.modify.openModifyOrder(order);
    this.modify.isEdited = true;
    this.isEditMode = true;
    this.orderModifyPanelExpanded = true;
  }

  onOrderToModifyTabClick() {
    this.orderModifyPanelExpanded = false;
  }

  onOrderToAdd() {
    this.orderModifyPanelExpanded = true;
    this.orderDetailsPanelExpanded = false;
    this.isEditMode = false;
    this.modify.isEdited = false;
    this.modify.orderForm.reset();
  }

  onPostOrderTiming(order: Order) {
    console.log(order);
    this.orderService.httpPostTiming(order).subscribe(
      order => {
        console.log(`Saved successfully. ${JSON.stringify(order)}`);
        this.orderService.getOrderList();
      });
  }

  onDeleteOrder(order: Order) {
    //this.orderService.deleteOrder(order.id).subscribe(
    //  order => {
    //    console.log(`Deleted successfully. ${JSON.stringify(order)}`);
    //  }
    //);

    this.orderService.deleteItem(order.id);

  }

  onGetOrderPricing(order: Order) {
    //this.orderService.getOrderPricing(order.id);
    this.orderService.getOrderPricingAction(order);
  }

  ngOnDestroy() {
    if (this.allOrders) {
      this.allOrders.unsubscribe();
    }
  }

}
