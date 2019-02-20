import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'notka-skill-checker',
  templateUrl: './skill-checker.component.html',
  styleUrls: ['./skill-checker.component.scss']
})
export class SkillCheckerComponent implements OnInit {

  @Input() skills: string;
  @Input() candidateName: string;
  @Input() positionSkills: any[];

  matchedSkills = [];

  constructor() { }

  ngOnInit() {
    this.matchedSkills = this.matchSkills(this.skills, this.positionSkills);
  }

  matchSkills(skills: string, positionSkills: any[]) {
    const resultMatch = new Array();
    let regex: RegExp,
      isMatch = false;

    skills.split(',').map((skill: string, index: number) => {

      skill = skill.trim();

      resultMatch[index] = {
        skill
      };

      positionSkills.forEach((pskill: string) => {
        regex = new RegExp(skill.split(' ')[0], 'i');
        isMatch = pskill.search(regex) !== -1;

        if (isMatch) {
          resultMatch[index].isMatch = isMatch;
        }

        isMatch = false;
      });

    });

    return resultMatch;
  }

}
