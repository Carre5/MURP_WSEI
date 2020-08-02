import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../order.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-order-item',
    templateUrl: './order-item.component.html',
    styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
    @Input() order: Order;

    @Output() orderSelected = new EventEmitter<void>();

    orderId: number;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    private onGetOrder() {
        this.http.get('' + '/api/Orders/' + this.orderId).subscribe();
    }

    onSelectedOrder() {
        this.orderSelected.emit();
    }
}
