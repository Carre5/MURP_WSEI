import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';
import { Status } from './order-statuses';
import { map, tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { SpinnerService } from './../../shared/spinner.service';


@Injectable({ providedIn: 'root' })
export class OrderService {
  onOrderToMofify = new EventEmitter();

  private STATUSES: Status[] = [
    { id: 1, name: 'New' },
    { id: 2, name: 'Draft' },
    { id: 3, name: 'OpenReady' },
    { id: 4, name: 'OpenInProgress' },
    { id: 5, name: 'PendingPricing' },
    { id: 6, name: 'Resolved' },
    { id: 7, name: 'Withdrawn' }
  ];

  private _refreshOrderList$ = new Subject<void>();

  order: Order;
  orders: Order[];

  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService
  ) { }


  apiURL: string = 'http://localhost:5000/api/';

  getStatuses(): Status[] {
    return this.STATUSES;
  }

  getStatusById(elem) {
    return this.STATUSES.filter(item => item.id === elem);
  }

  postOrder(postOrder: Order): Observable<Order> {
    return this.http
      .post<Order>(this.apiURL + 'Order', postOrder)
      .pipe(
        tap(() => {
          this._refreshOrderList$.next();
        })
    );
  }

  get refreshOrderList$() {
    return this._refreshOrderList$;
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURL + 'order');
  }

  getOrdersBySearchTerm(term: string) {
    return this.http.get<Order[]>(this.apiURL + 'order', { params: { searchTerm: term } });
  }

  getOrderList() {
    this.spinnerService.show();

    return this.http.get<{ [key: string]: Order }>(this.apiURL + 'order')
      .pipe(
        map(success => {
          const orderArray: Order[] = [];
          for (const key in success) {
            if (success.hasOwnProperty(key)) {
              orderArray.push({ ...success[key] });
            }
          }
          this.spinnerService.hide();
          return orderArray;
        },
          error => {
            console.error('Error');
          }
        ));
  }

  putOrderById(orderId: number, putOrder: Order) {
    return this.http.put(this.apiURL + 'Order/' + orderId, putOrder)
      .subscribe(responseData => {
          console.log(responseData);
        }
      );
  }

  getOrderById(orderId: number) {
    return this.http.get(this.apiURL + 'Order/' + orderId);
  }

  getOrderPricing(orderId: number) {
    return this.http.get<Order[]>(this.apiURL + 'order/orderPricing/' + orderId).subscribe(responseData => {
      console.log(responseData);
    }
    );
  }

  deleteOrder(orderId: number) {
    return this.http.delete(this.apiURL + 'Order/' + orderId).pipe(
      tap(() => {
        this._refreshOrderList$.next();
      }));
  }


  httpPostTiming(postOrder: Order): Observable<Order> {
    return this.http.post<Order>(this.apiURL + 'order/toggleTiming/' + postOrder.id, postOrder).pipe(
      tap(() => {
        this._refreshOrderList$.next();
      }));
  }


  getItems() {
    fetch(this.apiURL + 'Order/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Unable to get items.', error));
  }

  getOrderPricingAction(order: Order) {

    const item = order;

    fetch(this.apiURL + 'order/orderPricing/' + order.id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Unable to get items.', error));
  }

  postOrderTiming(order: Order) {
    const item = order;

    fetch(this.apiURL + 'order/toggleTiming/' + order.id, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Unable to get timing.', error));
  }

  deleteItem(orderID) {
    fetch(this.apiURL + 'Order/' + orderID, {
      method: 'DELETE'
    })
      .then(() => {
        this.getItems();
        console.log('Item deleted: ' + orderID);
      }
    )
      .catch(error => console.error('Unable to delete item.', error));
  }

  //addItem() {
  //  const addNameTextbox = document.getElementById('add-name');

  //  const item = {
  //    isComplete: false,
  //    name: addNameTextbox.value.trim()
  //  };

  //  fetch(this.apiURL + 'Order/', {
  //    method: 'POST',
  //    headers: {
  //      'Accept': 'application/json',
  //      'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify(item)
  //  })
  //    .then(response => response.json())
  //    .then(() => {
  //      this.getItems();
  //      addNameTextbox.value = '';
  //    })
  //    .catch(error => console.error('Unable to add item.', error));
  //}




}
