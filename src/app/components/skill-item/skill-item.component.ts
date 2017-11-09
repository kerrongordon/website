import { Component, Input } from '@angular/core'

@Component({
  selector: 'kgp-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.sass']
})
export class SkillItemComponent {
  @Input() content: string
  @Input() level: string
}
