import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Output() orderAlreadySelected = new EventEmitter<Order>();

  orders: Order[] = [
    new Order(1, 
      "Przewóz do Pcimia", 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra suscipit quam vitae consectetur.", 
      "Kraków", 
      "Pcim",
      "23/05/2020"),
    new Order(2, 
      "Przewóz do Radomia", 
      "Ut est sem, lobortis eget quam id, laoreet ornare dolor. Phasellus dapibus id eros sit amet suscipit.", 
      "Kraków", 
      "Radom",
      "28/05/2020"),
    new Order(3, 
      "Przewóz do Wawy", 
      "Quisque eleifend pulvinar augue non vehicula. Proin et vestibulum nibh. Aliquam erat volutpat. Aliquam augue lectus, dapibus eu dapibus ac, sagittis id ipsum. Duis eget mattis urna.", 
      "Skawina", 
      "Warszawa",
      "18/05/2020"),
    new Order(4, 
      "Przewóz do Pcimia 2", 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra suscipit quam vitae consectetur.", 
      "Kraków", 
      "Pcim",
      "31/05/2020"),
    new Order(5, 
      "Przewóz do Pcimia 2", 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra suscipit quam vitae consectetur.", 
      "Kraków", 
      "Pcim",
      "31/05/2020")
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  onOrderSelected(order: Order){
    this.orderAlreadySelected.emit(order);
  }

}
