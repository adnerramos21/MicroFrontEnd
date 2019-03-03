import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import Dashboard from './dashboard';
import { Observable } from 'rxjs';

export interface Element {
  pictureid: string;
  name: string;
  title: string;
  skills: string;
}

const ELEMENT_DATA: Element[] = [
  { pictureid: '1', name: 'Lena Heady', title: 'Senior Front End Developer', skills: 'Angular, HTML 5, CSS 3, ES6+, Gulp.JS, NodeJS' },
  { pictureid: '2', name: 'Amy Adams', title: 'Front End Developer', skills: 'AngularJS, HTML 5, CSS 3, ES6+' },
  { pictureid: '3', name: 'Mark Wahlberg', title: 'Full Stack Developer', skills: 'Angular, HTML 5, CSS 3, ES6+, .NET, NodeJS' },
  { pictureid: '4', name: 'Rachel McAdams', title: 'Full Stack Developer', skills: 'React, HTML 5, CSS 3, ES6+, PHP, .NET, NodeJS' },
  { pictureid: '5', name: 'Emma Stone', title: 'Front End Developer', skills: 'Vue JS, HTML 5, CSS 3, ES6+' },
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fullInfoBoxes = [
    {
      icon: 'supervised_user_circle',
      title: 'Applicants',
      when: 'This month',
      key: 'applicants'
    },
    {
      icon: 'assignment',
      title: 'Positions Available',
      when: 'This month',
      key: 'availablePositions'
    },
    {
      icon: 'verified_user',
      title: 'Positions Occupied',
      when: 'This month',
      key: 'positionsOccupied'
    },
    {
      icon: 'pageview',
      title: 'Company Seeking',
      when: 'This month',
      key: 'companySeeking'
    },
  ];

  displayedColumns: string[] = ['pictureid', 'name', 'title', 'skills'];
  positionSkills = ['Angular 2+', 'React', 'HTML 5', 'CSS 3', 'ES6', 'NodeJS'];
  positionName = 'Senior Front End Software Engineering';
  companyName = 'ABC News';

  dataSource: Observable<Element[]>;
  dashboard: Dashboard;
  infoBoxes: Observable<any>;

  constructor(private dashboardService: DashboardService) {
    this.dashboard = new Dashboard(this.dashboardService);
  }

  ngOnInit() {
    this.dashboard.fullInfoBox = this.fullInfoBoxes;
    this.infoBoxes = this.dashboard.getInfoBox();
    this.dataSource = this.dashboard.getTopApplicants();
  }

}
