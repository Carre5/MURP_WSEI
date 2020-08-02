import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';

import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanySummaryComponent } from './company-summary/company-summary.component';
import { DriverFormComponent } from './driver/driver-form/driver-form.component';
import { DriverComponent } from './driver/driver.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import {DriversTableComponent} from './driver/drivers-table/drivers-table.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { CarsTableComponent } from './car/cars-table/cars-table.component';
import { CarFormComponent } from './car/car-form/car-form.component';
import { CarComponent } from './car/car.component';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatTabsModule,
    ReactiveFormsModule,

    CompanyRoutingModule
  ],
  declarations: [CompanyComponent, CompanySummaryComponent, DriverFormComponent, DriverComponent, DriverDetailsComponent, DriversTableComponent, CarDetailsComponent, CarsTableComponent, CarFormComponent, CarComponent]
})
export class CompanyModule { }
