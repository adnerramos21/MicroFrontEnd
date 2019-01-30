import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  infoBoxes = [
    {
      icon: 'supervised_user_circle',
      title: 'Number of Applicants',
      amount: 36,
      when: 'This month'
    },
    {
      icon: 'assignment',
      title: 'Positions Available',
      amount: 12,
      when: 'This month'
    },
    {
      icon: 'verified_user',
      title: 'Positions Occupied',
      amount: 5,
      when: 'This month'
    },
    {
      icon: 'pageview',
      title: 'Company Seeking',
      amount: 21,
      when: 'This month'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
