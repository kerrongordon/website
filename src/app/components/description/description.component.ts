import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Description } from '../../services/description/description.service'

@Component({
  selector: 'kgp-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent {
  @Input() content: Description
}
