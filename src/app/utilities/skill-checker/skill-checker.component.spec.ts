import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCheckerComponent } from './skill-checker.component';

describe('SkillCheckerComponent', () => {
  let component: SkillCheckerComponent;
  let fixture: ComponentFixture<SkillCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
