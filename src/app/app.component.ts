import { Component } from '@angular/core';
import { MENU_ITEMS } from './side-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpened = true;
  isNotificationPanelOpened = false;
  isMenuOptionExpanded = false;
  menuItems = MENU_ITEMS;

  notifications = [
    {
      title: 'New Applicant',
      body: {
        message: 'James Franco uploaded a resume',
        timeAgo: '20 min ago'
      }
    },
    {
      title: 'Resume Update',
      body: {
        message: 'Bill Hader added the following skill: Node JS',
        timeAgo: '30 min ago'
      }
    },
    {
      title: 'Applicant Update',
      body: {
        message: 'Martha Steward is no longer available for the position: Backend Developer',
        timeAgo: '1 day ago'
      }
    },
  ];

  toggleExpand() {
    this.isMenuOptionExpanded = !this.isMenuOptionExpanded;
  }
}
