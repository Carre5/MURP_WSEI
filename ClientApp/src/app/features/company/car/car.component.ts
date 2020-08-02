import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  currentSubpage = "table";

  changeSubpage(subPageName: string) {
    this.currentSubpage = subPageName;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
