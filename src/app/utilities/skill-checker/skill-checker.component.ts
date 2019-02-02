import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-checker',
  templateUrl: './skill-checker.component.html',
  styleUrls: ['./skill-checker.component.scss']
})
export class SkillCheckerComponent implements OnInit {

  @Input() skills: any;
  @Input() candidateName: any;
  @Input() positionSkills: any;

  constructor() { }

  ngOnInit() {
    console.log(this.skills, this.candidateName, this.positionSkills);
  }

}
