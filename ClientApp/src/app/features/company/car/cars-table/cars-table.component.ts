import {Component, OnInit} from '@angular/core';
import {Drivers} from '../../driver/drivers-table/drivers-table.component';

export interface Cars {
  position: number;
  mark: string;
  model: string;
  year: string;
  plate: string;
  price: string;
  capacity: string;
}

const ELEMENT_DATA: Cars[] = [
  {position: 1, mark: 'Ford', model: 'Transit', year: '2014', plate: 'KR25326', price: '4,5 zł', capacity: '3,5'},
  {position: 2, mark: 'Fiat', model: 'Ducato', year: '2011', plate: 'WF25326', price: '3,5 zł', capacity: '2,5'},
  {position: 3, mark: 'Ford', model: 'Transit', year: '2010', plate: 'KRA23456', price: '2,5 zł', capacity: '3,5'},
  {position: 4, mark: 'Ford', model: 'Transit', year: '2014', plate: 'KR25326', price: '4,5 zł', capacity: '3,5'},
  {position: 5, mark: 'Ford', model: 'Transit', year: '2014', plate: 'KR25326', price: '4,5 zł', capacity: '3,5'},
];

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {
  displayedColumns: string[] = ['mark', 'model', 'year', 'plate', 'price', 'capacity'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
