import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdminRoutingModule } from './admin-routing.module';

import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { MenuBarComponent } from 'src/app/shared/components/layout/menu-bar/menu-bar.component';
import { HamburgerMenuComponent } from 'src/app//shared/components/layout/menu-bar/hamburger-menu/hamburger-menu.component';
import { SidebarComponent } from 'src/app//shared/components/layout/sidebar/sidebar.component';
import { MainPanelComponent } from 'src/app//shared/components/layout/main-panel/main-panel.component';
import { PopupComponent } from 'src/app//shared/components/layout/popup/popup.component';


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
    MatListModule
  ],
  declarations: [LayoutComponent, MenuBarComponent, HamburgerMenuComponent, SidebarComponent, MainPanelComponent, PopupComponent]
})
export class AdminModule {}