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
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.scss']
})
export class ListApplicantsComponent implements OnInit {

  applicants = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
