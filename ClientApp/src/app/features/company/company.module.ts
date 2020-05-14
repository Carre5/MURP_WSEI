import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanySummaryComponent } from './company-summary/company-summary.component';

@NgModule({
    imports: [
      CommonModule,
      MatGridListModule,
      FlexLayoutModule,
      MatCardModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,

      CompanyRoutingModule
    ],
    declarations: [CompanyComponent, CompanySummaryComponent]
  })
  export class CompanyModule {}
  