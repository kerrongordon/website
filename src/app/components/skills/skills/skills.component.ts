import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Skill } from '../../../config/interface/skill';

@Component({
  selector: 'kg-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {

  @Input() skill: Skill;

}
