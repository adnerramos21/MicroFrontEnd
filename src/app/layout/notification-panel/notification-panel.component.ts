import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss']
})
export class NotificationPanelComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
