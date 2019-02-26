import { Component, OnInit } from '@angular/core';

export interface Element {
  picture: string;
  name: string;
  title: string;
  skills: string;
}

const ELEMENT_DATA: Element[] = [
  { picture: '1', name: 'Lena Heady', title: 'Senior Front End Developer', skills: 'Angular, HTML 5, CSS 3, ES6+, Gulp.JS, NodeJS' },
  { picture: '2', name: 'Amy Adams', title: 'Front End Developer', skills: 'AngularJS, HTML 5, CSS 3, ES6+' },
  { picture: '3', name: 'Mark Wahlberg', title: 'Full Stack Developer', skills: 'Angular, HTML 5, CSS 3, ES6+, .NET, NodeJS' },
  { picture: '4', name: 'Rachel McAdams', title: 'Full Stack Developer', skills: 'React, HTML 5, CSS 3, ES6+, PHP, .NET, NodeJS' },
  { picture: '5', name: 'Emma Stone', title: 'Front End Developer', skills: 'Vue JS, HTML 5, CSS 3, ES6+' },
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  infoBoxes = [
    {
      icon: 'supervised_user_circle',
      title: 'Applicants',
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

  displayedColumns: string[] = ['picture', 'name', 'title', 'skills'];
  dataSource = ELEMENT_DATA;
  positionSkills = ['Angular 2+', 'React', 'HTML 5', 'CSS 3', 'ES6', 'NodeJS'];
  positionName = 'Senior Front End Software Engineering';
  companyName = 'ABC News';

  constructor() { }

  ngOnInit() {
  }

}