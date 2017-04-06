import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../../../router.animations';

@Component({
  selector: 'kg-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
   @Input() skills: Skill;
}

interface Skill {
  title: string;
  level: string;
}
