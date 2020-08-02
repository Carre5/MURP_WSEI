import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  minFromDate: Date;
  maxFromDate: Date;

  minToDate: Date;
  maxToDate: Date;

  enableDriverCheckbox = new FormControl(false);

  constructor() {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    this.minFromDate = new Date(currentYear, currentMonth, currentDay);
    this.maxFromDate = new Date(currentYear + 1, currentMonth, 31);

    this.minToDate = new Date(currentYear, currentMonth, currentDay + 1);
    this.maxToDate = new Date(currentYear + 1, currentMonth, 31);
  }

  ngOnInit(): void {
  }
}
