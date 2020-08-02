import {Component, OnInit} from '@angular/core';

export interface Drivers {
  position: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  licence: string;
}

const ELEMENT_DATA: Drivers[] = [
  {position: 1, name: 'Jan', surname: 'Polanski', phone: '535535535', email: 'j.kowalski@o2.pl', licence: 'B'},
  {position: 1, name: 'Zbigniew', surname: 'Małopolski', phone: '6646413164', email: 'j.kowalski@o2.pl', licence: 'B'},
  {position: 1, name: 'Alojzy', surname: 'Kowalski', phone: '535534545', email: 'j.kowalski@o2.pl', licence: 'B'},
  {position: 1, name: 'Krystian', surname: 'Nowak', phone: '565465535', email: 'j.kowalski@o2.pl', licence: 'B'},
  {position: 1, name: 'Jan', surname: 'Cypriański', phone: '45654654', email: 'j.kowalski@o2.pl', licence: 'B'},
  {position: 1, name: 'Kazimierz', surname: 'Dawidowicz', phone: '535535786878678535', email: 'j.kowalski@o2.pl', licence: 'B'},
];


@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class DriversTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'surname', 'phone', 'email', 'licence'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
