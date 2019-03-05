import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  skills = [
    'Angular',
    'HTML 5',
    'CSS 3',
    'ES6+',
    'Gulp.JS',
    'NodeJS'
  ];

  constructor() { }

  ngOnInit() {
  }

}
