import { Component, Input } from '@angular/core'

@Component({
  selector: 'kgp-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.sass']
})
export class SocialIconComponent {
  @Input() Facebook: string
  @Input() Twitter: string
  @Input() Google: string
  @Input() Github: string
}
