import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MenuBarComponent } from './menu-bar/menu-bar.component'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  @Input() openSearchNav: boolean;

  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;

  searchNavOpened = false;

  private readonly mediaWatcher: Subscription;

  constructor(media: MediaObserver) {
    this.mediaWatcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        if (this.sideNavOpened) {
          this.sideNavOpened = false;
        }
        this.sideNavMode = 'over';
      } else {
        this.sideNavOpened = true;
        this.sideNavMode = 'side';
      }
      if (change.mqAlias === 'xs') {
        this.toolBarHeight = 56;
      } else {
        this.toolBarHeight = 64;
      }
    });
  }

  searchNavOpen(isSearchNavOpened) {
    this.searchNavOpened = !isSearchNavOpened;
    console.log(this.searchNavOpened);
  }

  ngOnInit() { }

  receiveStat($event) {
    this.searchNavOpened = $event;
    console.log(this.searchNavOpened);
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }
}
