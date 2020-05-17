import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() order: Order;
  
  @Output() orderSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedOrder(){
    this.orderSelected.emit();
  }

}
