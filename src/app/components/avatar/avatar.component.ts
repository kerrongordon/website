import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'kgp-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input() img: string
  @Input() alt: string
}
