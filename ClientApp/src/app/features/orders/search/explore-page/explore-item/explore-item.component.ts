import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../order.model';
import { ExploreGrid } from '../../explore-page/explore-grid.model';


@Component({
  selector: 'app-explore-item',
  templateUrl: './explore-item.component.html',
  styleUrls: ['./explore-item.component.css']
})
export class ExploreItemComponent implements OnInit {
  @Input() order: ExploreGrid;
  @Input() area: number;
  @Input() selectedTile: number;
  @Input() infoArea: number;

  size1: boolean = false;
  size2: boolean = false;
  size4: boolean = false;
  selected: boolean = false;

  constructor() {
    
  }

  ngOnInit(): void {
    this.checkSize(this.order.priority);
    this.checkIfSelected(this.infoArea);

    console.log('Area: ' + this.area + ', selected: ' + this.selected + ', infoArea: ' + this.infoArea)
  }

  checkSize(priority: number) {
    if (priority === 1) {
      this.size1 = true;
    } else if (priority === 2) {
      this.size2 = true;
    } else if (priority === 4) {
      this.size4 = true;
    }
  }

  checkIfSelected(infoArea: number) {
    if (infoArea == this.order.area) {
      this.selected = true;
    }
  }

}
