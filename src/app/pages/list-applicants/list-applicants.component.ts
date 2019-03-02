import { Component, OnInit } from '@angular/core';
import { ListApplicantsService } from './list-applicants.service';

export interface Element {
  picture: string;
  name: string;
  title: string;
  skills: string;
  description: string;
  hasStar: boolean;
}

const ELEMENT_DATA: Element[] = [
  {
    picture: '1',
    name: 'Lena Heady',
    title: 'Senior Front End Developer',
    skills: 'Angular, HTML 5, CSS 3, ES6+, Gulp.JS, NodeJS',
    description: `I am an Senior Developer with 10+ years of experience.
    Team leader and mentor for others and always Keep-up-to-date with the latest tech.`,
    hasStar: true
  },
  {
    picture: '2',
    name: 'Amy Adams',
    title: 'Front End Developer',
    skills: 'AngularJS, HTML 5, CSS 3, ES6+',
    description: '',
    hasStar: false
  },
  {
    picture: '3',
    name: 'Mark Wahlberg',
    title: 'Full Stack Developer',
    skills: 'Angular, HTML 5, CSS 3, ES6+, .NET, NodeJS',
    description: '',
    hasStar: true
  },
  {
    picture: '4',
    name: 'Rachel McAdams',
    title: 'Full Stack Developer',
    skills: 'React, HTML 5, CSS 3, ES6+, PHP, .NET, NodeJS',
    description: '',
    hasStar: false
  },
  {
    picture: '5',
    name: 'Emma Stone',
    title: 'Front End Developer',
    skills: 'Vue JS, HTML 5, CSS 3, ES6+',
    description: '',
    hasStar: false
  },
  {
    picture: '6',
    name: 'Melissa McCarthy',
    title: 'Front End Developer',
    skills: 'React, HTML 5, CSS 3, ES6+, Angular',
    description: '',
    hasStar: false
  },
  {
    picture: '7',
    name: 'Will Smith',
    title: 'Full Stack Developer',
    skills: 'Vue JS, Angular, React, HTML 5, CSS 3, ES6+, Node JS, .NET, C, C++',
    description: '',
    hasStar: true
  },
  {
    picture: '8',
    name: 'Ryan Gosling',
    title: 'Senior Back End Developer',
    skills: '.NET, SQL, MongoDB, Firebase, PostgreSQL, MySQL, C, C++, C#, ES6+',
    description: '',
    hasStar: false
  },
  {
    picture: '9',
    name: 'Rachel Weisz',
    title: 'Back End Developer',
    skills: '.NET, SQL, PostgreSQL, MySQL, Java, C#, Node JS',
    description: '',
    hasStar: false
  },
];


@Component({
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.scss']
})
export class ListApplicantsComponent implements OnInit {

  applicants = ELEMENT_DATA;

  constructor(private listApplicantsService: ListApplicantsService) { }

  ngOnInit() {
    this.listApplicantsService.getData();
  }

}
