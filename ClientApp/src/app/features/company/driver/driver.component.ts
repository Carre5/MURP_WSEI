import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor() {
  }

  currentSubpage = "table";

  changeSubpage(subPageName: string) {
    this.currentSubpage = subPageName;
  }

  ngOnInit(): void {
  }

}
