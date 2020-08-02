import { Component, OnInit, OnDestroy, EventEmitter, Output, ViewChild } from '@angular/core';
import { Order } from '../../order.model';
import { OrderService } from '../../order.service';
import { ExploreGrid } from '../explore-page/explore-grid.model';
import { empty } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit, OnDestroy {
  @Output() orderAlreadySelected = new EventEmitter<Order>();
  orders: Order[] = this.orderService.orders;
  grid: ExploreGrid[] = [];

  mySubscription: any;

  breakpoint: number;
  
  numberOfTiles: number = 0;
  numberOfAreas: number = 0;

  size1: boolean = false;
  size2: boolean = false;
  size4: boolean = false;

  areas = [];
  selectedArea: number;
  infoArea: number;

  constructor(
    private orderService: OrderService,
    private router: Router) {

      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };

      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.router.navigated = false;
        }
      });
  }

  ngOnInit(): void {
    this.breakpoint = this.initialBreakpoint();
    this.getAllOrders();
    console.log('Breakpoint: ' + this.breakpoint);
  }

  onAssignRates() {
    this.getAllOrders();
  }

  initialBreakpoint() {
    if (window.innerWidth <= 600) {
      return 1;
    } else if (window.innerWidth <= 1200) {
      return 2;
    } else {
      return 3;
    }
  }

  onSelectedExploredOrder(item: ExploreGrid) {
    this.selectedArea = item.area;

    this.areas = [];
    this.assignAreas(this.orders)

    for (var i = 0; i < this.grid.length; i++) {

      if (this.selectedArea == this.grid[i].area && this.infoArea === undefined) {
        if (this.breakpoint == 1) {
          this.infoArea = this.grid[i].area + 1;
        } else if (this.breakpoint == 2) {

          if ((this.grid[i].area % 2) == 1) {
            this.infoArea = this.grid[i].area + 2;
          } else {
            this.infoArea = this.grid[i].area + 1;
          }

          this.grid[i].area = this.grid[i].area + 1;
        } else {
          if ((this.grid[i].area % 3) == 2) {
            this.infoArea = this.grid[i].area + 3;
          } else {
            this.infoArea = this.grid[i].area + 1;
          }
        }
      }

      if (this.grid[i].area >= this.infoArea && this.infoArea != undefined) {
        this.grid[i].area = this.grid[i].area + 1;
      }
    }

    this.areas.push(this.areas.length);
  }

  setBreakpoint(event) {
    if (event.target.innerWidth <= 600) {
      return 1;
    } else if (event.target.innerWidth <= 1200) {
      return 2;
    } else {
      return 3;
    }
  }

  onResize(event) {
    this.breakpoint = this.setBreakpoint(event);
    console.log('Breakpoint: ' + this.breakpoint);
  }

  getAllOrders() {
    this.orderService.getAllOrders()
      .subscribe(
        (orders: Order[]) => {
          this.orders = this.assignRange(orders);
          this.numberOfTiles = this.calculateNumberOfTiles(orders);
          this.numberOfAreas = this.calculateNumberOfAreas(this.numberOfTiles);

          this.assignAreas(orders);
        }
      );
  }

  getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);  
  }

  getOrderRange() {
    let range: number;

    range = this.getRandomNumber(15);

    if (range < 10) {
      return 1;
    } else if (range < 13) {
      return 2;
    } else {
      return 4;
    }
  }

  assignRange(orders: Order[]) {

    for (var i = 0; i < orders.length; i++) {
      orders[i].priority = this.getOrderRange();
    }

    return orders;
  }

  calculateNumberOfTiles(orders: Order[]) {
    var total = 0;

    for (var i = 0; i < orders.length; i++) {
      total += orders[i].priority;
    }

    return total;
  }

  calculateNumberOfAreas(totalTiles: number) {
    var areas = 0;

    if (totalTiles % 4 == 0) {
      areas = totalTiles / 4;
    } else {
      areas = Math.floor(totalTiles / 4) + 1
    }

    return areas;
  }

  assignAreas(orders: Order[]) {
    
    var done: boolean;

    var areas = [];
    var currentTile = 0;

    for (var i = 0; i < this.numberOfAreas; i++) {
      areas[i] = 0;
      this.areas[i] = i;
    }

    for (var i = 0; i < orders.length; i++) {

      currentTile = orders[i].priority;

      done = false;

      for (var j = 0; j < this.numberOfAreas; j++) {
        if (currentTile + areas[j] <= 4 && !done) {

          if (!(currentTile === 2 && areas[j] === 1 && !done)) {

            var gridItem = new ExploreGrid();

            orders[i].userRating = j;
            areas[j] += orders[i].priority;

            gridItem.order = orders[i];
            gridItem.area = j;
            gridItem.priority = orders[i].priority;

            if (gridItem.priority === 1) {
              gridItem.cols = 1;
              gridItem.rows = 1;
            } else if (gridItem.priority === 2) {
              gridItem.cols = 2;
              gridItem.rows = 1;
            } else if (gridItem.priority === 4) {
              gridItem.cols = 2;
              gridItem.rows = 2;
            }

            this.grid.push(gridItem);
            done = true;

          }

        } 
      }
    }
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
