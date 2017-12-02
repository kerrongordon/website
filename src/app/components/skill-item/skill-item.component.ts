import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'kgp-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillItemComponent {
  @Input() content: string
  @Input() level: string
}
