import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-checker',
  templateUrl: './skill-checker.component.html',
  styleUrls: ['./skill-checker.component.scss']
})
export class SkillCheckerComponent implements OnInit {

  @Input() skills: string;
  @Input() candidateName: any;
  @Input() positionSkills: any[];

  constructor() { }

  ngOnInit() {
    // console.log(this.skills, this.candidateName, this.positionSkills);
    // console.log(this.positionSkills);


    const targetSkills = this.positionSkills.map(pskill => {
      if (this.skills.search(pskill) !== -1) {
        return pskill;
      }
      return null;
    });

    console.log(targetSkills);

    // const candidateSkills = this.skills.split(',').map(cskills => {
    // this.positionSkills.map(pskills => {

    //   if (cskills == pskills) {
    //     console.log(cskills);
    //   }

    // });

    //   return this.positionSkills.indexOf(cskills) !== -1 ? cskills : null;
    // });

    // console.log(candidateSkills);

  }

}
