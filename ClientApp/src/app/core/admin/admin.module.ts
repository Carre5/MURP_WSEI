import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AdminRoutingModule } from './admin-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { MenuBarComponent } from './layout/menu-bar/menu-bar.component';
import { HamburgerMenuComponent } from './layout/menu-bar/hamburger-menu/hamburger-menu.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainPanelComponent } from './layout/main-panel/main-panel.component';
import { PopupComponent } from './layout/popup/popup.component';
import { SearchComponent } from './../../features/orders/search/search.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule
    ],
    declarations: [LayoutComponent, MenuBarComponent, HamburgerMenuComponent,
    SidebarComponent, MainPanelComponent, PopupComponent, SearchComponent, PageNotFoundComponent],
  exports: [
    CommonModule,
    PageNotFoundComponent
  ]
})
export class AdminModule { }
