import { Component, Input } from '@angular/core'

@Component({
  selector: 'kgp-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent {
  @Input() img: string
}
