import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { fadeInOutImg } from '../../exports/animations'

@Component({
  selector: 'kgp-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.sass'],
  animations: [fadeInOutImg],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardImageComponent {

  @Input() imge: string
  @Input() base64: string
  @Input() alt: string

  fadeInState = 'in'
  fadeOutState = 'out'

  isImgeLoad(e) {
    this.fadeInState = 'out'
    this.fadeOutState = 'in'
    return
  }

}
