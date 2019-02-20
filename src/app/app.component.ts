import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  @ViewChild('sidenav') sidenav: any;

  watcher: Subscription;
  activeMediaQuery = '';
  isOpened = true;
  isNotificationPanelOpened = false;
  sideNavMode = 'side';

  constructor(public mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';

      if (change.mqAlias === 'lg') {
        this.activeDesktopView();
      }
      if (change.mqAlias === 'md') {
        this.activeTableView();
      }
      if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
        this.activeMobileView();
      }
    });
  }

  activeDesktopView() {
    this.resetToDefault();
  }

  activeTableView() {
    console.log('tablet display on');
    this.isOpened = false;
    this.isNotificationPanelOpened = false;
    this.sideNavMode = 'over';
  }

  activeMobileView() {
    console.log('mobile display on');
    this.isOpened = false;
    this.isNotificationPanelOpened = false;
    this.sideNavMode = 'over';
  }

  resetToDefault() {
    console.log('reset');
    this.isOpened = true;
    this.isNotificationPanelOpened = false;
    this.sideNavMode = 'side';
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }
}
