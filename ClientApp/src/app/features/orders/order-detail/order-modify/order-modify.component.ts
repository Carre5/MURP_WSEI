
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormControl } from '@angular/forms';
import { Order } from '../../order.model';
import { OrderService } from '../../order.service';

import { AppSettingsService } from '../../../../shared/appsettings.service';

@Component({
  selector: 'app-order-modify',
  templateUrl: './order-modify.component.html',
  styleUrls: ['./order-modify.component.css'],
  providers: [AppSettingsService, OrderService]
})
export class OrderModifyComponent implements OnInit, OnDestroy {
  @Output() changeOrder = new EventEmitter<void>();
  @Input() orderToModify: Order;

  @Output() readOrderList = new EventEmitter;

  order: Order;
  orders: Order[] = this.orderService.orders;
  orderID: number;
  isEdited: boolean;
  editedItem: string;

  orderItem: {
    orderID: string,
    creationDate: string,
    carRegistrationNumber: string,
    status: string,
    description: string;
    priceMin: number,
    location: string;
    dateStart: string,
    dateEnd: string,
    driverRequired: boolean
  };

  orderForm: FormGroup;

  get formArray(): AbstractControl | null { return this.orderForm.get('formArray'); }

  minFromDate: Date;
  maxFromDate: Date;

  minToDate: Date;
  maxToDate: Date; 

  enableDriverCheckbox = new FormControl(false);

  constructor(
    private orderService: OrderService
  ) {

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    this.minFromDate = new Date(currentYear, currentMonth, currentDay);
    this.maxFromDate = new Date(currentYear + 1, currentMonth, 31);

    this.minToDate = new Date(currentYear, currentMonth, currentDay + 1);
    this.maxToDate = new Date(currentYear + 1, currentMonth, 31);
  }

  ngOnInit() {
    this.initializeForm();
  }

  callListRefresh() {
    this.readOrderList.emit();
    console.log('callListRefresh()');
  }

  initializeForm() {
    this.orderForm = new FormGroup({
      location: new FormControl(null, Validators.required),
      description: new FormControl(null),
      status: new FormControl(null, Validators.required),
      dateStart: new FormControl(null, Validators.required),
      dateEnd: new FormControl(null),
      priceMin: new FormControl(null, Validators.required),
      priceMax: new FormControl(null),
      companyID: new FormControl(null),
      companyName: new FormControl(null),
      carID: new FormControl(null),
      carRegistrationNumber: new FormControl(null),
      carModel: new FormControl(null),
      driverRequired: new FormControl(null),
      orderID: new FormControl(null, Validators.required),
      creationDate: new FormControl(null, Validators.required),
      startTiming: new FormControl(null),
      endTiming: new FormControl(null),
      wasStartedTiming: new FormControl(null),
      kilometersTaken: new FormControl(null),
      priority: new FormControl(null),
    });
  }

  onSubmit() {

    this.orderItem = this.orderForm.value;

    if (!this.isEdited) {
      this.order = new Order;
    } 

    this.order.location = this.orderForm.get('location').value;
    this.order.description = this.orderForm.get('description').value;
    this.order.status = this.orderForm.get('status').value;
    this.order.dateStart = this.orderForm.get('dateStart').value;
    this.order.dateEnd = this.orderForm.get('dateEnd').value;
    this.order.priceMin = this.orderForm.get('priceMin').value;
    this.order.priceMax = this.orderForm.get('priceMax').value;
    this.order.companyID = this.orderForm.get('companyID').value;
    this.order.companyName = this.orderForm.get('companyName').value;
    this.order.carID = this.orderForm.get('carID').value;
    this.order.carRegistrationNumber = this.orderForm.get('carRegistrationNumber').value;
    this.order.carModel = this.orderForm.get('carModel').value;
    this.order.driverRequired = this.orderForm.get('driverRequired').value;
    this.order.orderID = this.orderForm.get('orderID').value;
    this.order.creationDate = this.orderForm.get('creationDate').value;
    this.order.startTiming = this.orderForm.get('startTiming').value;
    this.order.endTiming = this.orderForm.get('endTiming').value;
    this.order.wasStartedTiming = this.orderForm.get('wasStartedTiming').value;
    this.order.kilometersTaken = this.orderForm.get('kilometersTaken').value;
    this.order.priority = this.orderForm.get('priority').value;

    if (this.isEdited) {
      this.onPutOrder(this.order.id, this.order);
    } else {
      this.onPostOrder(this.order);
    }
  }

  onPostOrder(orderData: Order) {
    this.orderService.postOrder(orderData).subscribe(
      order => {
        console.log(`Saved successfully. ${JSON.stringify(order)}`);
        this.orderService.getOrderList();
        this.orderForm.reset();
        this.callListRefresh();
      }
    );
  }

  onPutOrder(orderID: number, orderData) {
    this.orderService.putOrderById(orderID, orderData);
  }

  readDefaults() {
    this.orderForm.setValue({
      location: 'Kraków',
      description: 'No name',
      status: 1,
      dateStart: new Date(),
      dateEnd: new Date(),
      priceMin: 2.45,
      priceMax: 3.45,
      companyID: 12,
      companyName: 'Marbud',
      carID: 23,
      carRegistrationNumber: 'KMY VU469F',
      carModel: 'Opel',
      driverRequired: true,
      orderID: 'ORD/2020/07/2164',
      creationDate: new Date(),
      startTiming: '',
      endTiming: '',
      wasStartedTiming: false,
      kilometersTaken: 15,
      priority: 1
    });
  }

  public openModifyOrder(order: Order) {

    this.order = order;

    this.initializeForm();

    this.orderForm.setValue({
      location: order.location,
      description: order.description,
      status: order.status,
      dateStart: new Date(order.dateStart),
      dateEnd: new Date(order.dateEnd),
      priceMin: order.priceMin,
      priceMax: order.priceMax,
      companyID: order.companyID,
      companyName: order.companyName,
      carID: order.carID,
      carRegistrationNumber: order.carRegistrationNumber,
      carModel: order.carModel,
      driverRequired: order.driverRequired,
      orderID: order.orderID,
      creationDate: new Date(order.creationDate),
      startTiming: new Date(order.startTiming),
      endTiming: new Date(order.endTiming),
      wasStartedTiming: order.wasStartedTiming,
      kilometersTaken: order.kilometersTaken,
      priority: order.priority,
    });

  }

  public openAddOrder() {

  }

  ngOnDestroy() {

  }

}
